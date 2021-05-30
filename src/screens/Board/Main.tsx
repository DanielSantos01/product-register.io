import React from 'react';

import Header from '@components/Header';
import { HeaderOptions } from './components';
import { UserIcon, Container } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header
      customIcon={<UserIcon />}
      title="Daniel Santos"
      description="Desenvolvedor"
    >
      <HeaderOptions />
    </Header>
  </Container>
);

export default Main;
