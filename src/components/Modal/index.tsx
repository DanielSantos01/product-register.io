import React from 'react';

import { ModalProps } from './interfaces';
import { Container } from './styles';

const Modal: React.FC<ModalProps> = ({ isVisible, children }) => (
  <Container isVisible={isVisible}>
    {children}
  </Container>
);

export default Modal;
