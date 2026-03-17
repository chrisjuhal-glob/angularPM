export interface DynamicField {
  type: 'text' | 'number' | 'email';
  name: string;
  label: string;
  value?: any;
  validators?: any[];
}