import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

import { useItems } from '@hooks/Items';
import { BaseItemModel } from '@/hooks/Items/interfaces';
import { useAuth } from '@hooks/Auth';
import fields from './data/fields.json';
import { CreateItemProps, KeysModel } from './interfaces';
import Main from './Main';

const CreateItem: React.FC<CreateItemProps> = (props) => {
  const [isCreating, setCreating] = useState<boolean>(false);
  const { create } = useItems();
  const { userData } = useAuth();
  const { _id } = userData;
  const { toggleVisibility } = props;

  const checkInputs = useCallback(() => {
    const values: BaseItemModel = {} as BaseItemModel;
    fields.forEach((field) => {
      const { value } = document.querySelector<any>(`.${field.id}`);
      if (!field.isRequired || value) values[field.name as KeysModel] = value;
    });
    return values;
  }, []);

  const handleValidate = useCallback((data: BaseItemModel) => {
    if (Object.keys(data).length !== fields.length) {
      toast('Unable to create without required values');
      return false;
    }
    return true;
  }, []);

  const handleResult = useCallback((hasSucces: boolean) => {
    if (hasSucces) {
      toast('Item created successfully!');
      toggleVisibility();
      return;
    }
    toast('An error ocurred while was creating. Please, try again later...');
  }, [toggleVisibility]);

  const handleCreateItem = useCallback(async () => {
    setCreating(true);
    const data: BaseItemModel = checkInputs();
    const isValid: boolean = handleValidate(data);
    if (isValid) {
      const hasSuccess: boolean = await create({ ...data, ownerId: _id });
      handleResult(hasSuccess);
    }
    setCreating(false);
  }, [checkInputs, handleValidate, create, handleResult]);

  return (
    <Main
      {...props}
      handleCreateItem={handleCreateItem}
      isCreating={isCreating}
    />
  );
};

export default CreateItem;
