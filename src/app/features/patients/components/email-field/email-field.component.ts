import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email-field',
  template: `
    <span class="p-float-label formSpace">
      <input
        pInputText
        type="email"
        [formControl]="control"
        [class.ng-invalid]="control.invalid && control.touched"
      />
      <label>{{ field.label }}</label>
    </span>

    <small class="p-error" *ngIf="control.touched && control.errors?.['required']">
      El campo es obligatorio
    </small>

    <small class="p-error" *ngIf="control.touched && control.errors?.['email']">
      Email inválido
    </small>
  `,
})
export class EmailFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
}
