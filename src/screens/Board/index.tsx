import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ItemsProvider } from '@hooks/Items';
import { useAuth } from '@hooks/Auth';
import Main from './Main';

const Board: React.FC = () => {
  const { push } = useHistory();
  const { hasUserData, userData } = useAuth();
  const { name, role } = userData;

  useEffect(() => {
    if (!hasUserData) push('/auth');
  }, [hasUserData]);

  return <Main userName={name} userRole={role} />;
};

const EnhancedBoard: React.FC = () => (
  <ItemsProvider>
    <Board />
  </ItemsProvider>
);

export default EnhancedBoard;
