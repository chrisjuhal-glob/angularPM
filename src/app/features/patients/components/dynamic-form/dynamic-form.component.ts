import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { DynamicField } from '../../models/dynamic-field';
import { DynamicFieldDirective } from './dynamic-field.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMPONENT_MAPPER } from '../../models/mapper';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <p-card header="Agregar paciente {{ patient }}">
        <ng-template dynamicField pTemplate="header"></ng-template>

        <ng-template pTemplate="footer">
          <p-button
            label="Limpiar"
            severity="secondary"
            styleClass="p-button-outlined p-button-secondary"
            (click)="reset()"
          />
          <p-button
            label="Guardar"
            type="submit"
            icon="pi pi-check"
            [style]="{ 'margin-left': '.5em' }"
            [disabled]="!form.valid"
          />
        </ng-template>
      </p-card>
    </form>
  `,
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: DynamicField[] = [];
  @Input() patient!: number;

  @ViewChild(DynamicFieldDirective, { static: true })
  dynamicHost!: DynamicFieldDirective;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private injector: Injector,
  ) {}

  ngOnInit() {
    this.form = this.buildForm(this.fields);
    this.loadFields();
  }

  loadFields() {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    this.fields.forEach((field) => {
      const component = COMPONENT_MAPPER[field.type];

      const componentRef = viewContainerRef.createComponent(component) as any;

      componentRef.instance.field = field;
      componentRef.instance.control = this.form.get(field.name);
    });
  }

  submit() {
    console.log(this.form.value);
  }

  buildForm(fields: DynamicField[]) {
    const group: any = {};

    fields.forEach((field) => {
      const _validators: any = [];

      field.validators?.forEach((validator: any) => {
        switch (validator.type) {
          case 'required':
            _validators.push(Validators.required);
            break;

          case 'email':
            _validators.push(Validators.email);
            break;

          case 'min':
            _validators.push(Validators.min(validator.value));
            break;

          case 'maxLength':
            _validators.push(Validators.maxLength(validator.value));
            break;
        }
      });

      group[field.name] = ['', _validators];
    });

    return this.fb.group(group);
  }

  reset() {
    this.form.reset();
  }
}
