import React from 'react';

import { MainProps } from './interfaces';
import { Collapsed, Large } from './components';

const HeaderOptions: React.FC<MainProps> = ({ shouldCollapse, ...rest }) => (
  <>
    {shouldCollapse ? (
      <Collapsed {...rest} />
    ) : (
      <Large {...rest} />
    )}
  </>
);

export default HeaderOptions;
