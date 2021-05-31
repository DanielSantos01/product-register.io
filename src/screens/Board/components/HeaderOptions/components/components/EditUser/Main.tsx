import React from 'react';

import FieldsModal from '@components/FieldsModal';
import fields from './data/fields.json';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  userName,
  userRole,
  handleUpdate,
}) => (
  <FieldsModal
    title="Update"
    description="Fill te required fields to update some account informations"
    fields={fields}
    handleConfirm={handleUpdate}
    isMobile={isMobile}
    isVisible={isVisible}
    toggleVisibility={toggleVisibility}
    defaultValues={[userRole || '', userName]}
  />
);

export default Main;
