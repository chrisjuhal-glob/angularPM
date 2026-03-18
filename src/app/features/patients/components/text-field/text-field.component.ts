import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  template: `
    <span class="p-float-label formSpace">
      <input
        pInputText
        id="username"
        [formControl]="control"
        [class.ng-invalid]="control.invalid && control.touched"
      />
      <label [htmlFor]="field.label">{{ field.label }}</label>
    </span>

    <small
      class="p-error"
      *ngIf="control.touched && control.errors?.['required']"
    >
      El campo es obligatorio
    </small>
  `,
})
export class TextFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
}
