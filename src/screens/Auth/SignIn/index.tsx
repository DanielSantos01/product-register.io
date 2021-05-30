import React, { useState, useCallback } from 'react';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const SignIn: React.FC = () => {
  const [isCheckingLogin, setCheckingLogin] = useState<boolean>(false);
  const { checkExists } = useAuth();

  // TODO - TOAST MESSAGE
  const handleCheckLogin = useCallback(async () => {
    const target = document.querySelector<any>('.input-check-login');
    const triedLogin: string = target.value;
    if (!triedLogin) return;
    setCheckingLogin(true);
    await checkExists(triedLogin);
    setCheckingLogin(false);
  }, []);

  return <Main handleCheckLogin={handleCheckLogin} isCheckingLogin={isCheckingLogin} />;
};

export default SignIn;
