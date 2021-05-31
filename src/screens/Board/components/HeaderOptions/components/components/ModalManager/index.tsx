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
  isMobile = true,
}) => (
  <>
    <AskExit isVisible={isExitVisible} toggleVisibility={toggleExit} isMobile={isMobile} />
    <CreateItem isVisible={isCreateVisible} toggleVisibility={toggleCreate} isMobile={isMobile} />
    <EditUser isVisible={isEditVisible} toggleVisibility={toggleEdit} isMobile={isMobile} />
  </>
);

export default ModalManager;
