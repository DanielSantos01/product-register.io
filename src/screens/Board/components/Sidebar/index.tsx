import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { SmallContent, Filters } from './components';

import { Container, Title } from './styles';

const Sidebar: React.FC = () => {
  const shouldCollapse: boolean = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      {!shouldCollapse && <Title>Filters</Title>}
      {shouldCollapse ? <SmallContent /> : <Filters />}
    </Container>
  );
};

export default Sidebar;
