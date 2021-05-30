import React from 'react';

import { Loader } from '@components/Loader/styles';
import { CommonProps } from '../interfaces';
import { Back } from '../../components';
import { BackButton } from '../../styles';

const BackModel: React.FC<CommonProps> = ({ onClick, isLoading, style }) => (
  <BackButton onClick={onClick} style={style}>
    {isLoading ? <Loader /> : <Back />}
  </BackButton>
);

export default BackModel;
