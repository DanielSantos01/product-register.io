import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const SignIn: React.FC = () => {
  const [isCheckingLogin, setCheckingLogin] = useState<boolean>(false);
  const { checkExists } = useAuth();
  const { push } = useHistory();

  const checkFieldEmpty = useCallback((login: string) => {
    if (login) return false;
    toast('Please, enter a valid login to registrate...');
    return true;
  }, []);

  const handleCheckResult = useCallback((exists: boolean, login: string) => {
    if (exists) {
      toast('This login is already in use!!');
    } else {
      push('signup', { login });
    }
  }, []);

  const handleCheckLogin = useCallback(async () => {
    const targetValue = document.querySelector<any>('.input-check-login').value;
    const isEmpty: boolean = checkFieldEmpty(targetValue);
    if (isEmpty) return;

    setCheckingLogin(true);
    const exists: boolean = await checkExists(targetValue);
    handleCheckResult(exists, targetValue);
    setCheckingLogin(false);
  }, [checkFieldEmpty, handleCheckResult, checkExists]);

  return <Main handleCheckLogin={handleCheckLogin} isCheckingLogin={isCheckingLogin} />;
};

export default SignIn;
