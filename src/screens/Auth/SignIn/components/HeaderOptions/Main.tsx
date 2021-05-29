import React from 'react';

import { MainProps } from './interfaces';
import {
  Container,
  SignUpButton,
  ModelContainer,
  TextContent,
  AuxContainer,
  FieldInput,
} from './styles';

const HeaderOptions: React.FC<MainProps> = ({ handleSignUp }) => (
  <Container>
    <AuxContainer>
      <ModelContainer style={{ marginRight: 10 }}>
        <TextContent underline>About</TextContent>
      </ModelContainer>

      <ModelContainer>
        <TextContent underline>Contact Us</TextContent>
      </ModelContainer>
    </AuxContainer>

    <AuxContainer>
      <FieldInput placeholder="Login" />

      <FieldInput placeholder="Password" type="password" />

      <ModelContainer style={{ marginRight: 10 }}>
        <TextContent underline>Sign In</TextContent>
      </ModelContainer>

      <SignUpButton onClick={handleSignUp}>
        <TextContent>Sign Up</TextContent>
      </SignUpButton>
    </AuxContainer>
  </Container>
);

export default HeaderOptions;
