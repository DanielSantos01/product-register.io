import React from 'react';

import Input from '@components/Input';
import Header from '@components/Header';
import Button from '@components/SubmitButton';
import {
  Logo,
  HeaderOptions,
  ScreenInfo,
  SubmitButtonContent,
} from './components';
import {
  Container,
  ContentContainer,
  InputContainer,
  LogoContainer,
  RegistrationInfo,
} from './styles';

const Main: React.FC = () => (
  <Container>
    <Header>
      <HeaderOptions />
    </Header>

    <ContentContainer>
      <ScreenInfo />

      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ContentContainer>

    <InputContainer>
      <Input placeholder="youremail@somedomain.com" />
      <Button>
        <SubmitButtonContent />
      </Button>
    </InputContainer>
    <RegistrationInfo>
      Registrate now and be able to this and much more!
    </RegistrationInfo>
  </Container>
);

export default Main;
