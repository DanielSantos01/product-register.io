import React from 'react';

import { FieldsProps } from './interfaces';
import { FieldInput, InputContainer } from './styles';

const Fields: React.FC<FieldsProps> = ({ fields }) => {
  const allFields: JSX.Element[] = fields.map((field) => (
    <InputContainer>
      <FieldInput
        placeholder={field.name + (field.isRequired ? ' *' : '')}
        className={field.id}
        type={field.type}
      />
    </InputContainer>
  ));

  return <>{allFields}</>;
};

export default Fields;
