/* eslint-disable no-unused-expressions */
import React, { useCallback, useState } from 'react';

import { useAuth } from '@hooks/Auth';
import { toast } from 'react-toastify';
import { UpdateDataModel } from '@/hooks/Auth/interfaces';
import fields from './data/fields.json';
import { EditUserProps, KeysModel } from './interfaces';
import Main from './Main';

const EditUser: React.FC<EditUserProps> = (props) => {
  const [isSubmiting, setSubmiting] = useState<boolean>(false);
  const { userData, update } = useAuth();
  const { name, role, _id } = userData;
  const { toggleVisibility } = props;

  const checkInputs = useCallback(() => {
    const values: UpdateDataModel = {} as UpdateDataModel;
    fields.forEach((field) => {
      const { value } = document.querySelector<any>(`.${field.id}`);
      if (!field.isRequired || value) values[field.name as KeysModel] = value;
    });
    return values;
  }, []);

  const handleValidate = useCallback((data: UpdateDataModel) => {
    if (Object.keys(data).length !== fields.length) {
      toast('Unable to update without required values');
      return false;
    }
    return true;
  }, []);

  const handleResult = useCallback((hasSucces: boolean) => {
    if (hasSucces) {
      toast('User data updated successfully!');
      toggleVisibility();
      return;
    }
    toast('An error ocurred while updating. Please, try again later...');
  }, [toggleVisibility]);

  const handleUpdate = useCallback(async () => {
    setSubmiting(true);
    const data: UpdateDataModel = checkInputs();
    const isValid: boolean = handleValidate(data);
    if (isValid) {
      const hasSuccess: boolean = await update({ ...data, _id });
      handleResult(hasSuccess);
    }
    setSubmiting(false);
  }, [checkInputs, handleValidate, update, handleResult]);

  return (
    <Main
      {...props}
      userName={name}
      userRole={role}
      handleUpdate={handleUpdate}
      isSubmiting={isSubmiting}
    />
  );
};

export default EditUser;
