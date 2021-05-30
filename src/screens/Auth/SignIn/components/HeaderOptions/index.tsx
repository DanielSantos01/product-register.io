import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const HeaderOptions: React.FC = () => {
  const { push } = useHistory();
  const { signIn } = useAuth();

  const goToSignUp = useCallback(() => {
    push('signup');
  }, []);

  // TODO - TOAST MESSAGE
  const handleSignIn = useCallback(async () => {
    const login = document.querySelector<any>('.input-login-signin').value;
    const password = document.querySelector<any>('.input-password-signin').value;
    if (!password || !login) return;
    await signIn({ login, password });
  }, []);

  return <Main goToSignUp={goToSignUp} handleSignIn={handleSignIn} />;
};

export default HeaderOptions;
