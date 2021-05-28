import React from 'react';

import Input from '@components/Input';
import Header from '@components/Header';
import Button from '@components/SubmitButton';
import { Logo, HeaderOptions } from './components';
import {
  Container,
  ContentContainer,
  InputContainer,
  LogoContainer,
} from './styles';

const Main: React.FC = () => (
  <Container>
    <Header>
      <HeaderOptions />
    </Header>
    <ContentContainer>
      <InputContainer>
        <Input placeholder="E-mail address" />
        <Button />
      </InputContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ContentContainer>
  </Container>
);

export default Main;
