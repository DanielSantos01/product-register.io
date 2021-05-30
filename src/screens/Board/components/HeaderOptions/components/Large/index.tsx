import React from 'react';

import { MainProps } from './interfaces';
import { ModalManager } from '../components';
import {
  Container,
  AddIcon,
  CloseIcon,
  ExitIcon,
  UpdateIcon,
} from './styles';

const HeaderOptions: React.FC<MainProps> = (props) => {
  const {
    toggleCreate,
    isCreateVisible,
    toggleExit,
    toggleEdit,
  } = props;

  return (
    <Container>
      <ModalManager {...props} isMobile={false} />
      {!isCreateVisible ? <AddIcon onClick={toggleCreate} /> : <CloseIcon onClick={toggleCreate} />}
      <UpdateIcon onClick={toggleEdit} />
      <ExitIcon onClick={toggleExit} />
    </Container>
  );
};

export default HeaderOptions;
