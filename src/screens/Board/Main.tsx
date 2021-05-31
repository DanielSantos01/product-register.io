import React from 'react';

import Header from '@components/Header';
import { MainProps } from './interfaces';
import { HeaderOptions, Sidebar, MainBoard } from './components';
import { UserIcon, Container, ContentContainer } from './styles';

const Main: React.FC<MainProps> = ({ userName, userRole }) => (
  <Container>
    <Header
      customIcon={<UserIcon />}
      title={userName}
      description={userRole}
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
