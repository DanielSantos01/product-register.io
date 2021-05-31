import React from 'react';

import Modal from '@components/Modal';
import Hamburguer from '@components/Hamburguer';
import { MainProps } from './interfaces';
import { ModalManager } from '../components';
import {
  Container,
  ArrowIcon,
  ItemContainer,
  TextContent,
  RowContainer,
} from './styles';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibilty,
  ...rest
}) => (
  <Container>
    <Hamburguer onClick={toggleVisibilty} />

    <Modal isVisible={isVisible} style={{ padding: 0 }}>
      <ModalManager {...rest} />

      <ItemContainer>
        <TextContent style={{ fontSize: 22 }}>
          Menu
        </TextContent>

        <TextContent style={{ fontStyle: 'italic' }}>
          Select an option below
        </TextContent>
      </ItemContainer>

      <RowContainer hasBorder onClick={rest.toggleCreate}>
        <TextContent>Register Item</TextContent>
        <ArrowIcon />
      </RowContainer>

      <RowContainer hasBorder onClick={rest.toggleEdit}>
        <TextContent>Update Info</TextContent>
        <ArrowIcon />
      </RowContainer>

      <RowContainer onClick={rest.toggleExit}>
        <TextContent>Exit</TextContent>
        <ArrowIcon />
      </RowContainer>
    </Modal>
  </Container>
);

export default Main;
