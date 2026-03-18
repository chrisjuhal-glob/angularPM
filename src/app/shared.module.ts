import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './features/patients/components/dynamic-form/dynamic-field.component';
import { DynamicFormComponent } from './features/patients/components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './features/patients/components/text-field/text-field.component';
import { NumberFieldComponent } from './features/patients/components/number-field/number-field.component';
import { EmailFieldComponent } from './features/patients/components/email-field/email-field.component';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TextAreaComponent } from './features/patients/components/text-area/text-area.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    TextFieldComponent,
    NumberFieldComponent,
    EmailFieldComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    CardModule,
  ],
  exports: [DynamicFormComponent],
})
export class SharedModule {}
