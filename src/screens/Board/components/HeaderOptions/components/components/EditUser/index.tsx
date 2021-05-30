import React from 'react';

import { BackButton, ConfirmButton } from '@components/Button';
import UserUpdateFields from '@components/Fields';
import Modal from '@components/Modal';
import fields from './data/fields.json';
import { MainProps } from './interfaces';
import { ContentContainer, FieldsContainer } from './styles';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
} from '../styles';

const Main: React.FC<MainProps> = ({ isVisible, toggleVisibility, isMobile }) => (
  <Modal
    isVisible={isVisible}
    style={isMobile ? SmallStyle : LargeStyle}
  >
    <Container>
      <ContentContainer>
        <Title>Update</Title>

        <Description>
          If you want, you can update the following informations of your account.
        </Description>

        <Description>
          Notice that the action cannot be undone once it is done *
        </Description>

        <FieldsContainer>
          <UserUpdateFields fields={fields} />

          <ConfirmButton onClick={() => {}} />
          <BackButton onClick={toggleVisibility} />
        </FieldsContainer>
      </ContentContainer>
    </Container>
  </Modal>
);

export default Main;
