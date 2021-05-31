import React, { useState, useCallback } from 'react';

import { CollapsedProps } from './interfaces';
import Main from './Main';

const Collapsed: React.FC<CollapsedProps> = (props) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);

  return (
    <Main
      {...props}
      isVisible={isVisible}
      toggleVisibilty={toggleVisibility}
    />
  );
};

export default Collapsed;
