import React from 'react';

import SignUpFields from '@components/Fields';
import { FieldsProps } from './interfaces';
import fields from './data/fields.json';

const Fields: React.FC<FieldsProps> = ({ defaultValues }) => (
  <SignUpFields fields={fields} defaultValues={defaultValues} />
);

export default Fields;
