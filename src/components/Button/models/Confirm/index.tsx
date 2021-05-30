import React from 'react';

import { Loader } from '@components/Loader/styles';
import { CommonProps } from '../interfaces';
import { Confirm } from '../../components';
import { ConfirmButton } from '../../styles';

const ConfirmModel: React.FC<CommonProps> = ({ onClick, isLoading, style }) => (
  <ConfirmButton onClick={onClick} style={style}>
    {isLoading ? <Loader /> : <Confirm />}
  </ConfirmButton>
);

export default ConfirmModel;
