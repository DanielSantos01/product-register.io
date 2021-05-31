import React, { useState, useCallback } from 'react';

import Modal from '@components/Modal';
import Filters from '../Filters';
import { Container, ArrowIcon, Title } from './styles';

const SmallContent: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);

  return (
    <>
      <Modal
        isVisible={isVisible}
        style={{ top: 110, height: window.innerHeight - 120 }}
      >
        <Filters toggleVisibility={toggleVisibility} />
      </Modal>
      <Container onClick={toggleVisibility}>
        <Title>Filters</Title>
        <ArrowIcon isOpen={isVisible} />
      </Container>
    </>
  );
};

export default SmallContent;
