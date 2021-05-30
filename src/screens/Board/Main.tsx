import React from 'react';

import Hamburguer from '@components/Hamburguer';
import Header from '@components/Header';

import { UserIcon, Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header
      customIcon={<UserIcon />}
      title="Daniel Santos"
      description="Desenvolvedor"
    >
      <Hamburguer />
    </Header>
  </Container>
);

export default Main;
