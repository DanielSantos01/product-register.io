import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const HeaderOptions: React.FC = () => {
  const { push } = useHistory();
  const { signIn } = useAuth();
  const shouldCollapse: boolean = useMediaQuery({ maxWidth: 1024 });

  const goToSignUp = useCallback(() => {
    push('signup');
  }, []);

  // TODO - TOAST MESSAGE
  const handleSignIn = useCallback(async () => {
    const login = document.querySelector<any>('.input-login-signin').value;
    const password = document.querySelector<any>('.input-password-signin').value;
    if (!password || !login) return;
    const response = await signIn({ login, password });
    console.log(response);
  }, []);

  return (
    <Main
      goToSignUp={goToSignUp}
      handleSignIn={handleSignIn}
      shouldCollapse={shouldCollapse}
    />
  );
};

export default HeaderOptions;
