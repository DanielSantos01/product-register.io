import React from 'react';

import { MainProps } from './interfaces';
import { Collapsed } from './components';

const HeaderOptions: React.FC<MainProps> = ({ shouldCollapse, ...rest }) => (
  <>
    {shouldCollapse ? (
      <Collapsed {...rest} />
    ) : (
      <Collapsed {...rest} />
    )}
  </>
);

export default HeaderOptions;
