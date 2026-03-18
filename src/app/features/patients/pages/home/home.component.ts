import { Component } from "@angular/core";
import { PATIENT_FORM_CONFIG } from "../../models/form-config";

@Component({
  selector: 'app-home',
  template: `
  <app-dynamic-form [fields]="fields" [patient]="1"></app-dynamic-form>
  `,
})
export class HomeComponent {
  fields = PATIENT_FORM_CONFIG;
}