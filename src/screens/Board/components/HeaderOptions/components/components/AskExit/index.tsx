import React, { useCallback } from 'react';

import { useAuth } from '@hooks/Auth';
import { AskExitProps } from './interfaces';
import Main from './Main';

const AskExit: React.FC<AskExitProps> = (props) => {
  const { logOut } = useAuth();

  const handleSignOut = useCallback(() => {
    logOut();
  }, [logOut]);

  return <Main {...props} handleSignOut={handleSignOut} />;
};

export default AskExit;
