import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SignUpDataModel } from '@hooks/Auth/interfaces';
import { useAuth } from '@hooks/Auth';
import { NameModel } from './components/Fields/interfaces';
import fields from './components/Fields/data/fields.json';
import Main from './Main';

const SignUp: React.FC = () => {
  const [isSubmiting, setSubmiting] = useState<boolean>(false);
  const { goBack } = useHistory();
  const { signUp } = useAuth();

  const handleReturn = useCallback(() => {
    goBack();
  }, []);

  const handleFields = useCallback(() => {
    const signUpData: SignUpDataModel = {} as SignUpDataModel;
    fields.forEach((field) => {
      const { id, name, isRequired } = field;
      const fieldValue: string = document.querySelector<any>(`.${id}`).value;
      if (!isRequired || fieldValue) {
        signUpData[name as NameModel] = fieldValue;
      }
    });
    const isValid: boolean = Object.keys(signUpData).length === 4;
    return [isValid, signUpData];
  }, []);

  // TODO - TOAST MESSAGE
  const handleSignUp = useCallback(async () => {
    setSubmiting(true);
    const [isValid, signUpData] = handleFields();
    if (isValid) {
      const wasCreated: boolean = await signUp(signUpData as SignUpDataModel);
      if (wasCreated) handleReturn();
    }
    setSubmiting(false);
  }, []);

  return (
    <Main
      handleReturn={handleReturn}
      handleSignUp={handleSignUp}
      isSubmiting={isSubmiting}
    />
  );
};

export default SignUp;
