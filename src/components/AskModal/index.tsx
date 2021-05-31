import React from 'react';

import { AskExitProps } from './interfaces';
import Main from './Main';

const AskModal: React.FC<AskExitProps> = (props) => <Main {...props} />;

export default AskModal;
