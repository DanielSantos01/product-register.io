import React from 'react';

import {
  Container,
  SignUpButton,
  ModelContainer,
  TextContent,
  AuxContainer,
  FieldInput,
} from './styles';

const HeaderOptions: React.FC = () => (
  <Container>
    <AuxContainer>
      <ModelContainer style={{ marginRight: 10 }}>
        <TextContent underline>About</TextContent>
      </ModelContainer>

      <ModelContainer>
        <TextContent underline>Contact US</TextContent>
      </ModelContainer>
    </AuxContainer>

    <AuxContainer>
      <FieldInput placeholder="Login" />

      <FieldInput placeholder="Password" type="password" />

      <ModelContainer style={{ marginRight: 10 }}>
        <TextContent underline>Sign In</TextContent>
      </ModelContainer>

      <SignUpButton>
        <TextContent>Sign Up</TextContent>
      </SignUpButton>
    </AuxContainer>
  </Container>
);

export default HeaderOptions;
