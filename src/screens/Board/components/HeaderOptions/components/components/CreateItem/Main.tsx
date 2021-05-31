import React from 'react';

import FieldsModal from '@components/FieldsModal';
import fields from './data/fields.json';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  handleCreateItem,
}) => (
  <FieldsModal
    description="Fill in the required fields to register an item"
    title="Register item"
    fields={fields}
    handleConfirm={handleCreateItem}
    isMobile={isMobile}
    isVisible={isVisible}
    toggleVisibility={toggleVisibility}
  />
);

export default Main;
