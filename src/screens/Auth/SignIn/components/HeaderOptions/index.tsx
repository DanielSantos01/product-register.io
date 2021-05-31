import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const HeaderOptions: React.FC = () => {
  const [isSubmiting, setSubmiting] = useState<boolean>(false);
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
    setSubmiting(true);
    await signIn({ login, password });
    setSubmiting(false);
  }, []);

  return (
    <Main
      isSubmiting={isSubmiting}
      goToSignUp={goToSignUp}
      handleSignIn={handleSignIn}
      shouldCollapse={shouldCollapse}
    />
  );
};

export default HeaderOptions;
