import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `
    <span class="p-float-label formSpace">
      <textarea
        [id]="field.label"
        rows="5"
        cols="30"
        pInputTextarea
        [formControl]="control"
        [class.ng-invalid]="control.invalid && control.touched"
      ></textarea>
      <label [for]="field.label">{{ field.label }}</label>
    </span>

    <div class="char-counter">
      {{ control.value?.length || 0 }} / {{ maxValue }}
    </div>

    <small
      class="p-error"
      *ngIf="control.touched && control.errors?.['required']"
    >
      El campo es obligatorio
    </small>
    <small
      class="p-error"
      *ngIf="control.touched && control.errors?.['maxlength']"
    >
      Máximo {{ maxValue }}
      caracteres
    </small>
  `,
})
export class TextAreaComponent {
  @Input() field!: any;
  @Input() control!: any;

  maxValue: number = 0;

  ngOnInit() {
    console.log(this.field, this.control);
    this.control.value = null;
    this.getMaxValue();
  }

  getMaxValue() {
    this.maxValue = this.field.validators?.find(
      (v: any) => v.type === 'maxLength',
    )?.value;
  }
}
