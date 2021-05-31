import React from 'react';

import Modal from '@components/Modal';
import { BackButton, ConfirmButton } from '@components/Button';
import { COLORS } from '@styles/theme/colors';
import { MainProps } from './interfaces';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
} from '../styles';
import { ButtonsContainer } from './styles';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  handleSignOut,
}) => (
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
          style={{ width: 120, marginRight: 15, background: COLORS.lighterGreen }}
        />

        <ConfirmButton
          onClick={handleSignOut}
          style={{ background: 'rgba(220, 0, 0, 0.85)', width: 120 }}
        />
      </ButtonsContainer>
    </Container>
  </Modal>
);

export default Main;
