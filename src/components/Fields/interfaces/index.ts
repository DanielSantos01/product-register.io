export interface FieldsProps {
  fields: FieldModel[];
}

export interface FieldModel {
  id: string;
  name: string;
  isRequired: boolean;
  type: string;
}
