import React from 'react';

import fields from './data/fields.json';

import { FieldInput, InputContainer } from './styles';

const Fields: React.FC = () => {
  const allFields: JSX.Element[] = fields.map((field) => (
    <InputContainer>
      <FieldInput
        placeholder={field.name + (field.isRequired ? ' *' : '')}
        className={field.id}
      />
    </InputContainer>
  ));

  return <>{allFields}</>;
};

export default Fields;
