import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Main from './Main';

const SignUp: React.FC = () => {
  const { goBack } = useHistory();

  const handleReturn = useCallback(() => {
    goBack();
  }, []);

  return <Main handleReturn={handleReturn} />;
};

export default SignUp;
