/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react';
import { toast } from 'react-toastify';

import { useItems } from '@hooks/Items';
import { OptionalBaseItemModel } from '@hooks/Items/interfaces';
import fields from './data/fields.json';
import { EditUserProps, KeysModel } from './interfaces';
import Main from './Main';

const Edit: React.FC<EditUserProps> = (props) => {
  const { update } = useItems();
  const { toggleVisibility } = props;
  const { item } = props;
  const defaultValues: string[] = [item.name, item.price, item.quantity, item.description || ''];

  const checkInputs = useCallback(() => {
    const values: OptionalBaseItemModel = {} as OptionalBaseItemModel;
    fields.forEach((field) => {
      const { value } = document.querySelector<any>(`.${field.id}`);
      if (!field.isRequired || value) values[field.name as KeysModel] = value;
    });
    return values;
  }, []);

  const handleValidate = useCallback((data: OptionalBaseItemModel) => {
    if (Object.keys(data).length !== fields.length) {
      toast('Unable to update without required values');
      return false;
    }
    return true;
  }, []);

  const handleResult = useCallback((hasSucces: boolean) => {
    if (hasSucces) {
      toggleVisibility();
      toast('Item data updated successfully!');
      return;
    }
    toast('An error ocurred while updating. Please, try again later...');
  }, [toggleVisibility]);

  const handleUpdate = useCallback(async () => {
    const data: OptionalBaseItemModel = checkInputs();
    const isValid: boolean = handleValidate(data);
    if (isValid) {
      data.id = item._id;
      const hasSuccess: boolean = await update(data);
      handleResult(hasSuccess);
    }
  }, [checkInputs, handleValidate, update, handleResult]);

  return (
    <Main
      {...props}
      defaultValues={defaultValues}
      handleUpdate={handleUpdate}
    />
  );
};

export default Edit;
