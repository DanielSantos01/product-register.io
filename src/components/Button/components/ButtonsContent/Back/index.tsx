import React from 'react';

import { RowContainer, TextContet, LeftArrowIcon } from '../styles';

const Confirm: React.FC = () => (
  <RowContainer>
    <LeftArrowIcon className="slide-on-hover" />
    <TextContet className="appear-on-hover">Return</TextContet>
  </RowContainer>
);

export default Confirm;
