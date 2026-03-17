import { Component, Injector, Input, OnInit, ViewChild } from "@angular/core";
import { DynamicField } from "../../models/dynamic-field";
import { DynamicFieldDirective } from "./dynamic-field.component";
import { FormBuilder, FormGroup } from "@angular/forms";
import { COMPONENT_MAPPER } from "../../models/mapper";

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <ng-template dynamicField></ng-template>

      <button pButton type="submit" label="Guardar"></button>
    </form>
  `
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: DynamicField[] = [];

  @ViewChild(DynamicFieldDirective, { static: true })
  dynamicHost!: DynamicFieldDirective;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private injector: Injector
  ) {}

  ngOnInit() {
    this.form = this.buildForm(this.fields);
    this.loadFields();
  }

  loadFields() {
    const viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    this.fields.forEach(field => {
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

    fields.forEach(field => {
      group[field.name] = [''];
    });

    return this.fb.group(group);
  }
}