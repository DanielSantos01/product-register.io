import React from 'react';

import Button from '@components/SubmitButton';
import { Header, Logo } from './components';
import {
  Container,
  ContentContainer,
  InputContainer,
  LogoContainer,
  Input,
} from './styles';

const Main: React.FC = () => (
  <Container>
    <Header />
    <ContentContainer>
      <InputContainer>
        <Input placeholder="Endereço de E-mail" />
        <Button />
      </InputContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </ContentContainer>
  </Container>
);

export default Main;
