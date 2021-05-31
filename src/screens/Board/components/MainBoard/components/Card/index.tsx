import React from 'react';
import moment from 'moment';

import { CardProps } from './interfaces';
import {
  Container,
  LeftContainer,
  RightContaner,
  RowContainer,
  TextContent,
  TagIcon,
  Desciption,
} from './styles';

const Card: React.FC<CardProps> = ({ item }) => (
  <Container>
    <LeftContainer>
      <RightContaner>
        <RowContainer>
          <TagIcon />
          <TextContent style={{ paddingLeft: 0 }}>Toys</TextContent>
        </RowContainer>

        <RowContainer>
          <TextContent>{item.name}</TextContent>
          <TextContent>{`R$: ${item.price}`}</TextContent>
        </RowContainer>

        <TextContent>{`Quantity: ${item.quantity}`}</TextContent>
      </RightContaner>

      {item.description && (
        <RightContaner>
          <Desciption>{item.description}</Desciption>
        </RightContaner>
      )}
    </LeftContainer>

    <RightContaner>
      <TextContent style={{ paddingLeft: 0, marginTop: 'auto' }}>
        Created at
        {' '}
        {moment(item.createdAt).format('DD/MM/YYYY')}
      </TextContent>
    </RightContaner>
  </Container>
);

export default Card;
