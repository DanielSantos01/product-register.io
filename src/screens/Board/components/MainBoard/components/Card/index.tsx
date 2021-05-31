import React from 'react';

import {
  Container,
  LeftContainer,
  RightContaner,
  RowContainer,
  TextContent,
  TagIcon,
  Desciption,
} from './styles';

const Card: React.FC = () => (
  <Container>
    <LeftContainer>
      <RightContaner>
        <RowContainer>
          <TagIcon />
          <TextContent style={{ paddingLeft: 0 }}>Toys</TextContent>
        </RowContainer>

        <RowContainer>
          <TextContent>Buzz</TextContent>
          <TextContent>R$: 300,00</TextContent>
        </RowContainer>

        <TextContent>Quantity: 250</TextContent>
      </RightContaner>

      <RightContaner>
        <Desciption>Boneco de ação e aventura, inimigo do zurg</Desciption>
      </RightContaner>
    </LeftContainer>

    <RightContaner>
      <TextContent style={{ paddingLeft: 0, marginTop: 'auto' }}>Created at: 31/05/21</TextContent>
    </RightContaner>
  </Container>
);

export default Card;
