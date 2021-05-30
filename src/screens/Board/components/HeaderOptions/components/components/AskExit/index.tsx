import React from 'react';

import Modal from '@components/Modal';
import BackButton from '../BackButton';
import { MainProps } from './interfaces';

const Main: React.FC<MainProps> = ({ isVisible, toggleVisibility }) => (
  <Modal isVisible={isVisible} style={{ top: 0, height: '100%', padding: 0 }}>
    <BackButton onClick={toggleVisibility} />
    <p>EXIT</p>
  </Modal>
);

export default Main;
