import React from 'react';

import Soon from '@components/Soon';
import { useMediaQuery } from 'react-responsive';

import { Container, Title } from './styles';

const Sidebar: React.FC = () => {
  const shouldCollapse: boolean = useMediaQuery({ maxWidth: 768 });

  return shouldCollapse ? <></> : (
    <Container>
      <Title>Filters</Title>
      <Soon />
    </Container>
  );
};

export default Sidebar;
