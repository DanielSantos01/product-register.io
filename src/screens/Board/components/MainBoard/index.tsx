import React from 'react';

import { useItems } from '@hooks/Items';
import FullLoader from '@components/FullLoader';
import { COLORS } from '@styles/theme/colors';
import { Card, EmptyList } from './components';
import { Container } from './styles';

const MainBoard: React.FC = () => {
  const { items, isLoading } = useItems();
  const hasItems: boolean = !!items.length;

  if (!hasItems) return <EmptyList />;
  if (isLoading) return <FullLoader color={COLORS.headerSecondary} size={40} />;

  const itemsList: JSX.Element[] = items.map((item) => <Card item={item} />);
  return (
    <Container className="foo">
      {itemsList}
    </Container>
  );
};

export default MainBoard;
