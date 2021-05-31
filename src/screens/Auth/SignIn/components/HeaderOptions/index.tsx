import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

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

  const handleResult = useCallback((hasSuccess: boolean) => {
    if (hasSuccess) toast('Signed in successfully!');
    else toast('Unable to sign in, please, check the fields content...');
  }, []);

  const advertise = useCallback(() => {
    toast('Both login and password must be filled!');
  }, []);

  const handleSignIn = useCallback(async () => {
    const login = document.querySelector<any>('.input-login-signin').value;
    const password = document.querySelector<any>('.input-password-signin').value;
    if (!password || !login) {
      advertise();
      return;
    }
    setSubmiting(true);
    const hasSuccess: boolean = await signIn({ login, password });
    handleResult(hasSuccess);
    setSubmiting(false);
  }, [handleResult, signIn, advertise]);

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
