import React from 'react';

import { Loader } from '@components/Loader/styles';
import Input from '@components/Input';
import Header from '@components/Header';
import Button from '@components/SubmitButton';
import { MainProps } from './interfaces';
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
  CubeIcon,
} from './styles';

const Main: React.FC<MainProps> = ({ handleCheckLogin, isCheckingLogin }) => (
  <Container>
    <Header customIcon={<CubeIcon />} title="ProductRegister.io">
      <HeaderOptions />
    </Header>

    <ContentContainer>
      <ScreenInfo />

      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ContentContainer>

    <InputContainer>
      <Input placeholder="youremail@somedomain.com" className="input-check-login" />
      <Button onClick={handleCheckLogin}>
        {isCheckingLogin ? <Loader /> : <SubmitButtonContent />}
      </Button>
    </InputContainer>
    <RegistrationInfo>
      Registrate now and be able to this and much more!
    </RegistrationInfo>
  </Container>
);

export default Main;
