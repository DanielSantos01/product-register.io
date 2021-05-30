import React from 'react';

import { Loader } from './styles';
import { LoaderProps } from './interfaces';

const LoaderComponent: React.FC<LoaderProps> = (props) => (<Loader {...props} />);

export default LoaderComponent;
