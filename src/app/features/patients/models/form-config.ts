import { DynamicField } from './dynamic-field';
export const PATIENT_FORM_CONFIG: DynamicField[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    validators: [{ type: 'required' }],
  },
  {
    type: 'number',
    name: 'age',
    label: 'Edad',
    validators: [
      { type: 'required' },
      { type: 'min', value: 18 },
    ],
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    validators: [{ type: 'required' }, { type: 'email' }],
  },
  {
    type: 'textArea',
    name: 'observation',
    label: 'Observación',
    validators: [
      { type: 'required' },
      { type: 'maxLength', value: 200 },
    ],
  },
];
