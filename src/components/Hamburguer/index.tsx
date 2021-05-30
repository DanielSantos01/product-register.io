import React from 'react';

import { HamburguerProps } from './interfaces';
import { Container, Line, LineContainer } from './styles';

const Hamburguer: React.FC<HamburguerProps> = ({ onClick }) => (
  <Container onClick={onClick}>
    <LineContainer>
      <Line />
    </LineContainer>
    <LineContainer>
      <Line />
    </LineContainer>
    <LineContainer>
      <Line />
    </LineContainer>
  </Container>
);

export default Hamburguer;
