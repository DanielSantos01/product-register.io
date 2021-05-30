import React from 'react';

import { ModalProps } from './interfaces';
import { Container } from './styles';

const Modal: React.FC<ModalProps> = ({ isVisible, children, style }) => (
  <Container isVisible={isVisible} style={style}>
    {children}
  </Container>
);

export default Modal;
