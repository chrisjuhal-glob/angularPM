export interface DynamicField {
  type: 'text' | 'number' | 'email' | 'textArea';
  name: string;
  label: string;
  value?: any;
  validators?: any[];
}