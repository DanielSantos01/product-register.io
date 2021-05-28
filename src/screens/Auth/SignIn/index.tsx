import React, { useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { APP_CONSTANTS } from '../../../constants';

const { REGISTER_BASE_URL } = APP_CONSTANTS;

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

const SignIn: React.FC = () => {
  const createUser = useCallback(async () => {
    const response = await fetch(
      'https://product-register-api.herokuapp.com/user?id=60b0778562801c0004250111',
    );
    console.log(response);
  }, []);

  createUser();

  return (
    <div>
      <p>Olá Mundo!</p>
    </div>
  );
};

export default SignIn;
