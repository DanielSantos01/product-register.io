import React from 'react';

import { BackButtonProps } from './interfaces';
import { Container, BackIcon } from './styles';

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <Container onClick={onClick}>
    <BackIcon />
  </Container>
);

export default BackButton;
