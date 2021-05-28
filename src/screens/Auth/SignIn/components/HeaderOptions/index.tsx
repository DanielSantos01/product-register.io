import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Main from './Main';

const HeaderOptions: React.FC = () => {
  const { push } = useHistory();

  const handleSignUp = useCallback(() => {
    push('signup');
  }, []);

  return <Main handleSignUp={handleSignUp} />;
};

export default HeaderOptions;
