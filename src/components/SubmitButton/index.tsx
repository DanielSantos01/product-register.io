import React from 'react';

import { Button } from './styles';
import { SubmitButtonProps } from './interfaces';

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, style, onClick }) => (
  <Button style={style} onClick={onClick}>
    {children}
  </Button>
);

export default SubmitButton;
export { Button };
