import React from 'react';

import { useItems } from '@hooks/Items';
import FullLoader from '@components/FullLoader';
import { COLORS } from '@styles/theme/colors';
import { Card } from './components';
import { Container } from './styles';

const MainBoard: React.FC = () => {
  const { items, isLoading } = useItems();

  if (isLoading || !items.length) return <FullLoader color={COLORS.headerSecondary} size={40} />;

  const itemsList: JSX.Element[] = items.map((item) => <Card item={item} />);
  const hasItems: boolean = !!items.length;

  return (
    <Container>
      {itemsList}
    </Container>
  );
};

export default MainBoard;
