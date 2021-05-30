import React from 'react';

import Header from '@components/Header';
import { HeaderOptions, Sidebar, MainBoard } from './components';
import { UserIcon, Container, ContentContainer } from './styles';

const Main: React.FC = () => (
  <Container>
    <Header
      customIcon={<UserIcon />}
      title="Daniel Santos"
      description="Desenvolvedor"
    >
      <HeaderOptions />
    </Header>

    <ContentContainer>
      <Sidebar />
      <MainBoard />
    </ContentContainer>
  </Container>
);

export default Main;
