import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SignUpDataModel } from '@hooks/Auth/interfaces';
import { useAuth } from '@hooks/Auth';
import { NameModel } from './components/Fields/interfaces';
import fields from './components/Fields/data/fields.json';
import Main from './Main';

const SignUp: React.FC = () => {
  const [isSubmiting, setSubmiting] = useState<boolean>(false);
  const { goBack, location } = useHistory<any>();
  const { signUp } = useAuth();
  const { login } = location.state;
  const defaultValues: string[] = [];
  defaultValues[2] = login;

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

  const handleResult = useCallback((wasCreated: boolean) => {
    if (!wasCreated) {
      toast('Unable to resolve the action. Please, try again later...');
      return;
    }
    handleReturn();
    toast('Account created successfully!! Now, you just need to SignIn :)');
  }, [handleReturn]);

  const handleSignUp = useCallback(async () => {
    setSubmiting(true);
    const [isValid, signUpData] = handleFields();
    if (isValid) {
      const wasCreated: boolean = await signUp(signUpData as SignUpDataModel);
      handleResult(wasCreated);
    } else {
      toast('Invalid submit! Please, verify the required fields...');
    }
    setSubmiting(false);
  }, [handleFields, handleResult]);

  return (
    <Main
      handleReturn={handleReturn}
      handleSignUp={handleSignUp}
      isSubmiting={isSubmiting}
      defaultValues={defaultValues}
    />
  );
};

export default SignUp;
