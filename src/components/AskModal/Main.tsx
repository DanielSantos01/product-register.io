import React from 'react';

import Modal from '@components/Modal';
import { BackButton, ConfirmButton } from '@components/Button';
import { COLORS } from '@styles/theme/colors';
import { AskExitProps } from './interfaces';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
  ButtonsContainer,
} from './styles';

const Main: React.FC<AskExitProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  title,
  description,
  onConfirm,
  confirmButtonColor,
  declineButtonColor,
}) => (
  <Modal
    isVisible={isVisible}
    style={isMobile ? SmallStyle : LargeStyle}
  >
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <ButtonsContainer>
        <BackButton
          onClick={toggleVisibility}
          style={{
            width: 120,
            marginRight: 15,
            background: declineButtonColor || COLORS.lighterGreen,
          }}
        />

        <ConfirmButton
          onClick={onConfirm}
          style={{ background: confirmButtonColor || 'rgba(220, 0, 0, 0.85)', width: 120 }}
        />
      </ButtonsContainer>
    </Container>
  </Modal>
);

export default Main;
