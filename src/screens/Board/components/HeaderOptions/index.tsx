import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useAuth } from '@hooks/Auth';
import Main from './Main';

const HeaderOptions: React.FC = () => {
  const [isExitVisible, setExitVisibulity] = useState<boolean>(false);
  const [isCreateVisible, setCreateVisibility] = useState<boolean>(false);
  const [isUpdateVisible, setUpdateVisibility] = useState<boolean>(false);
  const shouldCollapse: boolean = useMediaQuery({ maxWidth: 450 });

  const toggleExitVisibility = useCallback(() => {
    setUpdateVisibility(false);
    setCreateVisibility(false);
    setExitVisibulity(!isExitVisible);
  }, [isExitVisible]);

  const toggleUpdateVisibility = useCallback(() => {
    setCreateVisibility(false);
    setExitVisibulity(false);
    setUpdateVisibility(!isUpdateVisible);
  }, [isUpdateVisible]);

  const toggleCreateVisibility = useCallback(() => {
    setUpdateVisibility(false);
    setExitVisibulity(false);
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
