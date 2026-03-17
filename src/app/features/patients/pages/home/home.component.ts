import { Component } from "@angular/core";
import { PATIENT_FORM_CONFIG } from "../../models/form-config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  fields = PATIENT_FORM_CONFIG;
}