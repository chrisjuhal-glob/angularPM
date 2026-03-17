import { EmailFieldComponent } from "../components/email-field/email-field.component";
import { NumberFieldComponent } from "../components/number-field/number-field.component";
import { TextFieldComponent } from "../components/text-field/text-field.component";

export const COMPONENT_MAPPER: any = {
  text: TextFieldComponent,
  number: NumberFieldComponent,
  email: EmailFieldComponent
};