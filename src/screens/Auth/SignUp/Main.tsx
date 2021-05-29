import React from 'react';

import { MainProps } from './interfaces';
import { Fields, ConfirmContent, BackContent } from './components';
import {
  Container,
  Title,
  Description,
  ContentContainer,
  ConfirmButton,
  BackButton,
} from './styles';

const Main: React.FC<MainProps> = ({ handleReturn }) => (
  <Container>
    <Title>SIGN UP</Title>

    <Description>fill the required fields to create your account</Description>

    <ContentContainer>
      <Fields />

      <ConfirmButton>
        <ConfirmContent />
      </ConfirmButton>

      <BackButton onClick={handleReturn}>
        <BackContent />
      </BackButton>
    </ContentContainer>
  </Container>
);

export default Main;
