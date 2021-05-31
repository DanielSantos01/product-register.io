import React from 'react';

import FieldsModal from '@components/FieldsModal';
import fields from './data/fields.json';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  defaultValues,
  handleUpdate,
}) => (
  <FieldsModal
    title="Update Item"
    description="Fill te required fields to update the item data"
    fields={fields}
    handleConfirm={handleUpdate}
    isMobile={isMobile}
    isVisible={isVisible}
    toggleVisibility={toggleVisibility}
    defaultValues={defaultValues}
    optionalStyles={{ width: document.querySelector<any>('.foo')?.offsetWidth }}
  />
);

export default Main;
