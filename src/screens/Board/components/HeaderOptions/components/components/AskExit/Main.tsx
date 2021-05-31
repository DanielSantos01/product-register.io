import React from 'react';

import AskModal from '@components/AskModal';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  handleSignOut,
}) => (
  <AskModal
    isMobile={isMobile}
    isVisible={isVisible}
    title="Exit"
    description="Your choose the 'Exit' option. By confirming the action, you will be loged out. Do you confirm?"
    onConfirm={handleSignOut}
    toggleVisibility={toggleVisibility}
  />
);

export default Main;
