import { EmailFieldComponent } from "../components/email-field/email-field.component";
import { NumberFieldComponent } from "../components/number-field/number-field.component";
import { TextAreaComponent } from "../components/text-area/text-area.component";
import { TextFieldComponent } from "../components/text-field/text-field.component";

export const COMPONENT_MAPPER: any = {
  text: TextFieldComponent,
  number: NumberFieldComponent,
  email: EmailFieldComponent,
  textArea: TextAreaComponent,
};