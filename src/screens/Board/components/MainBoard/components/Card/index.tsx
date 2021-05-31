import React, { useState, useCallback } from 'react';

import { CardProps } from './interfaces';
import Main from './Main';

const Card: React.FC<CardProps> = ({ item }) => {
  const [isEditVisible, setEditVisible] = useState<boolean>(false);
  const [isDeleteVisible, setDeleteVisible] = useState<boolean>(false);

  const toggleEditVisibility = useCallback(() => {
    setDeleteVisible(false);
    setEditVisible(!isEditVisible);
  }, [isEditVisible]);

  const toggleDeleteVisibility = useCallback(() => {
    setEditVisible(false);
    setDeleteVisible(!isDeleteVisible);
  }, [isDeleteVisible]);

  return (
    <Main
      item={item}
      isDeleteVisible={isDeleteVisible}
      isEditVisible={isEditVisible}
      toggleDelete={toggleDeleteVisibility}
      toggleEdit={toggleEditVisibility}
    />
  );
};

export default Card;
