import React from 'react';

import { FieldsProps } from './interfaces';
import { FieldInput, InputContainer } from './styles';

const Fields: React.FC<FieldsProps> = ({ fields, defaultValues }) => {
  const allFields: JSX.Element[] = fields.map((field, index) => (
    <InputContainer>
      <FieldInput
        placeholder={field.name + (field.isRequired ? ' *' : '')}
        className={field.id}
        type={field.type}
        defaultValue={(defaultValues && defaultValues[index]) || undefined}
      />
    </InputContainer>
  ));

  return <>{allFields}</>;
};

export default Fields;
