import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-email-field',
  template: `
    <div class="field">
      <label>{{ field.label }}</label>
      <input pInputText type="email" [formControl]="control" />
    </div>
  `
})
export class EmailFieldComponent {
  @Input() field!: any;
  @Input() control!: any;
}