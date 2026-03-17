import { CommonModule } from "@angular/common";
import { DynamicFieldDirective } from "./features/patients/components/dynamic-form/dynamic-field.component";
import { DynamicFormComponent } from "./features/patients/components/dynamic-form/dynamic-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TextFieldComponent } from "./features/patients/components/text-field/text-field.component";
import { NumberFieldComponent } from "./features/patients/components/number-field/number-field.component";
import { EmailFieldComponent } from "./features/patients/components/email-field/email-field.component";
import { NgModule } from "@angular/core";
import { PatientFormComponent } from "./features/patients/components/patient-form/patient-form.component";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    PatientFormComponent,
    TextFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    /*     // PrimeNG
        InputTextModule,
        ButtonModule */
  ],
  exports: [DynamicFormComponent]
})
export class SharedModule { }