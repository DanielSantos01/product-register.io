/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React, { useCallback } from 'react';

import { useAuth } from '@hooks/Auth';
import { toast } from 'react-toastify';
import { useItems } from '@hooks/Items';
import { DeleteItemProps } from './interfaces';
import Main from './Main';

const Delete: React.FC<DeleteItemProps> = (props) => {
  const { userData } = useAuth();
  const { deleteItem } = useItems();
  const { toggleVisibility, item } = props;

  const handleResult = useCallback((hasSucces: boolean) => {
    if (hasSucces) {
      toast('Item deleted successfully!');
      toggleVisibility();
      return;
    }
    toast('An error ocurred while deleting. Please, try again later...');
  }, [toggleVisibility]);

  const handleDelete = useCallback(async () => {
    const hasSuccess: boolean = await deleteItem(item._id, userData._id);
    handleResult(hasSuccess);
  }, [handleResult, deleteItem]);

  return (
    <Main
      {...props}
      handleDelete={handleDelete}
    />
  );
};

export default Delete;
