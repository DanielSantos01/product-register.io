import React from 'react';

import Modal from '@components/Modal';
import Hamburguer from '@components/Hamburguer';
import { MainProps } from './interfaces';
import {
  Container,
  FieldInput,
  InputContainer,
  ArrowIcon,
  ItemContainer,
  TextContent,
} from './styles';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibilty,
  goToSignUp,
  handleSignIn,
}) => (
  <Container>
    <Hamburguer onClick={toggleVisibilty} />
    <Modal isVisible={isVisible}>
      <InputContainer>
        <FieldInput placeholder="login" className="input-login-signin" />
      </InputContainer>

      <InputContainer>
        <FieldInput
          placeholder="password"
          type="password"
          className="input-password-signin"
        />
      </InputContainer>

      <ItemContainer style={{ marginTop: -20 }} onClick={handleSignIn}>
        <TextContent>SignIn</TextContent>
        <ArrowIcon />
      </ItemContainer>

      <ItemContainer hasBorder onClick={goToSignUp}>
        <TextContent>SignUp</TextContent>
        <ArrowIcon />
      </ItemContainer>

      <ItemContainer>
        <TextContent>Contact Us</TextContent>
        <ArrowIcon />
      </ItemContainer>

      <ItemContainer>
        <TextContent>About</TextContent>
        <ArrowIcon />
      </ItemContainer>
    </Modal>
  </Container>
);

export default Main;
