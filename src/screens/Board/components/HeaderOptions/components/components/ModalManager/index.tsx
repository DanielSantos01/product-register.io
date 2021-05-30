import React from 'react';

import { ModalManagerProps } from './interfaces';
import AskExit from '../AskExit';
import CreateItem from '../CreateItem';
import EditUser from '../EditUser';

const ModalManager: React.FC<ModalManagerProps> = ({
  isCreateVisible,
  isEditVisible,
  isExitVisible,
  toggleCreate,
  toggleEdit,
  toggleExit,
}) => (
  <>
    <AskExit isVisible={isExitVisible} toggleVisibility={toggleExit} />
    <CreateItem isVisible={isCreateVisible} toggleVisibility={toggleCreate} />
    <EditUser isVisible={isEditVisible} toggleVisibility={toggleEdit} />
  </>
);

export default ModalManager;
