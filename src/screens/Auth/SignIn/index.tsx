import React, { useCallback } from 'react';

import AppHttpService from '../../../services/httpService';

const SignIn: React.FC = () => {
  const createUser = useCallback(async () => {
    const response = await AppHttpService.read({
      url: 'https://product-register-api.herokuapp.com/user?id=60b0778562801c0004250111',
    });
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
