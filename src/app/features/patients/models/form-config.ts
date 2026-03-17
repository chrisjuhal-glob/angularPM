import { DynamicField } from "./dynamic-field";

export const PATIENT_FORM_CONFIG: DynamicField[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    validators: ['required']
  },
  {
    type: 'number',
    name: 'age',
    label: 'Edad',
    validators: ['required']
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validators: ['required', 'email']
  },
  {
    type: 'text',
    name: 'condition',
    label: 'Condición'
  }
];