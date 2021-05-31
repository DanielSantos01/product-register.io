import React from 'react';

import { Loader, Container } from './styles';
import { LoaderProps } from './interfaces';

const FullLoader: React.FC<LoaderProps> = (props) => (
  <Container>
    <Loader {...props} />
  </Container>
);

export default FullLoader;
