import React from 'react';

import { RowContainer, TextContet, RightArrowIcon } from '../styles';

const Confirm: React.FC = () => (
  <RowContainer>
    <TextContet className="visible-on-hover">Confirm</TextContet>
    <RightArrowIcon className="move-on-hover" />
  </RowContainer>
);

export default Confirm;
