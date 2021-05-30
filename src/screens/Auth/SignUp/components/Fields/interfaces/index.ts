export interface FieldModel {
  id: string;
  name: NameModel;
  isRequired: boolean;
  type: string;
}

export type NameModel = 'role' | 'name' | 'login' | 'password';
