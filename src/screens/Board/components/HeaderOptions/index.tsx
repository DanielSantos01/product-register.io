import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const HeaderOptions: React.FC = () => {
  const [isExitVisible, setExitVisible] = useState<boolean>(false);
  const [isCreateVisible, setCreateVisibility] = useState<boolean>(false);
  const [isUpdateVisible, setUpdateVisibility] = useState<boolean>(false);
  const shouldCollapse: boolean = useMediaQuery({ maxWidth: 1024 });

  const toggleExitVisibility = useCallback(() => {
    setExitVisible(!isExitVisible);
  }, [isExitVisible]);

  const toggleUpdateVisibility = useCallback(() => {
    setUpdateVisibility(!isUpdateVisible);
  }, [isUpdateVisible]);

  const toggleCreateVisibility = useCallback(() => {
    setCreateVisibility(!isCreateVisible);
  }, [isCreateVisible]);

  return (
    <Main
      isCreateVisible={isCreateVisible}
      isEditVisible={isUpdateVisible}
      isExitVisible={isExitVisible}
      toggleCreate={toggleCreateVisibility}
      toggleEdit={toggleUpdateVisibility}
      toggleExit={toggleExitVisibility}
      shouldCollapse={shouldCollapse}
    />
  );
};

export default HeaderOptions;
