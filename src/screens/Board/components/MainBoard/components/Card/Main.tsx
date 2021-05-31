import React from 'react';
import moment from 'moment';

import { MainProps } from './interfaces';
import { ModalManager } from './components';
import {
  Container,
  LeftContainer,
  RightContaner,
  RowContainer,
  TextContent,
  TagIcon,
  Desciption,
  DeleteIcon,
  EditIcon,
} from './styles';

const Card: React.FC<MainProps> = ({ item, ...rest }) => (
  <>
    <ModalManager {...rest} item={item} />
    <Container>
      <LeftContainer>
        <RightContaner>
          <RowContainer>
            <TagIcon />
            <TextContent style={{ paddingLeft: 0 }}>{item.category}</TextContent>
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

      <DeleteIcon className="visible-on-hover" onClick={rest.toggleDelete} />
      <EditIcon className="visible-on-hover" onClick={rest.toggleEdit} />
    </Container>
  </>
);

export default Card;
