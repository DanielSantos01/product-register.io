import React from 'react';

import { ArrowIcon, Container, TextContent } from './styles';

const SubmitButtonContent: React.FC = () => (
  <Container>
    <TextContent className="visible-on-hover">Registrate</TextContent>
    <ArrowIcon className="move-on-hover" />
  </Container>
);

export default SubmitButtonContent;
