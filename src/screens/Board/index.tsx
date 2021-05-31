import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const Board: React.FC = () => {
  const { push } = useHistory();
  const { hasUserData } = useAuth();

  useEffect(() => {
    if (!hasUserData) push('/auth');
  }, [hasUserData]);

  return <Main />;
};

export default Board;
