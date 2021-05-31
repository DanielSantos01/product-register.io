export interface FieldsProps {
  fields: FieldModel[];
  defaultValues?: string[];
}

export interface FieldModel {
  id: string;
  name: string;
  isRequired: boolean;
  type: string;
}
