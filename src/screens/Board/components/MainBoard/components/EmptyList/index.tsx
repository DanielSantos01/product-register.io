import React from 'react';

import { Container, AlertIcon, Title } from './styles';

const EmptyList: React.FC = () => (
  <Container>
    <AlertIcon />
    <Title>Created items will appear here</Title>
  </Container>
);

export default EmptyList;
