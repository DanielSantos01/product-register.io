import React from 'react';

import { BackButton, ConfirmButton } from '@components/Button';
import { MainProps } from './interfaces';
import { Fields } from './components';
import {
  Container,
  Title,
  Description,
  ContentContainer,
} from './styles';

const Main: React.FC<MainProps> = ({ handleReturn, handleSignUp, isSubmiting }) => (
  <Container>
    <Title>SIGN UP</Title>

    <Description>fill the required fields to create your account</Description>

    <ContentContainer>
      <Fields />

      <ConfirmButton onClick={handleSignUp} isLoading={isSubmiting} />

      <BackButton onClick={handleReturn} />
    </ContentContainer>
  </Container>
);

export default Main;
