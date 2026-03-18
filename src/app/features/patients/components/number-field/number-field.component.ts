import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-field',
  template: `
    <span class="p-float-label formSpace">
      <p-inputNumber
        [inputId]="field.label"
        [formControl]="control"
        [class.ng-invalid]="control.invalid && control.touched"
      >
      </p-inputNumber>
      <label [htmlFor]="field.label">{{ field.label }}</label>
    </span>
    <small
      class="p-error"
      *ngIf="control.touched && control.errors?.['required']"
    >
      El campo es obligatorio
    </small>
    <small class="p-error" *ngIf="control.touched && control.errors?.['min']">
      Edad mínima: {{ minValue }}
    </small>
  `,
})
export class NumberFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
  minValue: number = 0;

  ngOnInit() {
    console.log(this.field, this.control);
    this.control.value = null;
    this.getMinValue();
  }

  getMinValue() {
    this.minValue = this.field.validators?.find(
      (v: any) => v.type === 'min',
    )?.value;
  }
}
