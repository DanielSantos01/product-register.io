import React from 'react';

import AskModal from '@components/AskModal';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({
  isVisible,
  toggleVisibility,
  isMobile,
  handleDelete,
}) => (
  <AskModal
    title="Delete"
    description="Are you sure you want to delete this item?"
    isMobile={isMobile}
    isVisible={isVisible}
    onConfirm={handleDelete}
    toggleVisibility={toggleVisibility}
  />
);

export default Main;
