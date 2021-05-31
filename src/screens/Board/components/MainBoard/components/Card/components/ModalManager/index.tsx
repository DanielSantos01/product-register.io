import React from 'react';

import { ModalManagerProps } from './interfaces';
import Edit from '../Edit';
import Delete from '../Delete';

const ModalManager: React.FC<ModalManagerProps> = ({
  isEditVisible,
  toggleEdit,
  toggleDelete,
  isDeleteVisible,
  isMobile = false,
  item,
}) => (
  <>
    <Edit
      isVisible={isEditVisible}
      toggleVisibility={toggleEdit}
      isMobile={isMobile}
      item={item}
    />

    <Delete
      isMobile={isMobile}
      toggleVisibility={toggleDelete}
      isVisible={isDeleteVisible}
      item={item}
    />
  </>
);

export default ModalManager;
