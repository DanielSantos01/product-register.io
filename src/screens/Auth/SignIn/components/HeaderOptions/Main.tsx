import React from 'react';

import { MainProps } from './interfaces';
import { Collapsed, Large } from './components';

const HeaderOptions: React.FC<MainProps> = ({ goToSignUp, handleSignIn, shouldCollapse }) => (
  <>
    {shouldCollapse ? (
      <Collapsed goToSignUp={goToSignUp} handleSignIn={handleSignIn} />
    ) : (
      <Large goToSignUp={goToSignUp} handleSignIn={handleSignIn} />
    )}
  </>
);

export default HeaderOptions;
