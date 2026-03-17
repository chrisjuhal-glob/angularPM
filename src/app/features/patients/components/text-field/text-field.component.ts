import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-text-field',
  template: `
    <div class="field">
      <label>{{ field.label }}</label>
      <input pInputText [formControl]="control" />
    </div>
  `
})
export class TextFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
}