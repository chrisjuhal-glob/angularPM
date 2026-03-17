import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-number-field',
  template: `
    <div class="field">
      <label>{{ field.label }}</label>
      <input pInputText type="number" [formControl]="control" />
    </div>
  `
})
export class NumberFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
}