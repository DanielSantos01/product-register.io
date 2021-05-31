import React from 'react';

import { BackButton, ConfirmButton } from '@components/Button';
import Modal from '@components/Modal';
import CreateItemFields from '@components/Fields';
import fields from './data/fields.json';
import { MainProps } from './interfaces';
import { FieldsContainer, ContentContainer } from './styles';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
} from '../styles';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  handleCreateItem,
  isCreating,
}) => (
  <Modal
    isVisible={isVisible}
    style={isMobile ? SmallStyle : LargeStyle}
  >
    <Container>
      <ContentContainer>
        <Title>Create Item</Title>

        <Description>Fill the rquired fields to create a new item</Description>

        <FieldsContainer>
          <CreateItemFields fields={fields} />

          <ConfirmButton onClick={handleCreateItem} isLoading={isCreating} />

          <BackButton onClick={toggleVisibility} />
        </FieldsContainer>
      </ContentContainer>
    </Container>
  </Modal>
);

export default Main;
