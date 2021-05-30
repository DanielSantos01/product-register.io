import React from 'react';

import Modal from '@components/Modal';
import { BackButton, ConfirmButton } from '@components/Button';
import { MainProps } from './interfaces';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
} from '../styles';
import { ButtonsContainer } from './styles';

const Main: React.FC<MainProps> = ({ isVisible, toggleVisibility, isMobile }) => (
  <Modal
    isVisible={isVisible}
    style={isMobile ? SmallStyle : LargeStyle}
  >
    <Container>
      <Title>Exit</Title>
      <Description>
        {`You choose the "Exit" option. By confirming the action, your section will be
        ended and you will be redirected to the SignIn page. Do you confirm your choice?`}
      </Description>
      <ButtonsContainer>
        <BackButton
          onClick={toggleVisibility}
          style={{ width: 120, marginRight: 15 }}
        />

        <ConfirmButton
          onClick={() => {}}
          style={{ background: 'rgba(220, 0, 0, 0.9)', width: 120 }}
        />
      </ButtonsContainer>
    </Container>
  </Modal>
);

export default Main;
