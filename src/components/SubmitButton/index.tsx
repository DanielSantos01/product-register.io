import React from 'react';

import { Button } from './styles';
import { SubmitButtonProps } from './interfaces';

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, style }) => (
  <Button style={style}>
    {children}
  </Button>
);

export default SubmitButton;
