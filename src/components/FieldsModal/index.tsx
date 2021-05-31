import React, { useCallback, useState } from 'react';

import { BackButton, ConfirmButton } from '@components/Button';
import Modal from '@components/Modal';
import CreateItemFields from '@components/Fields';

import { FieldsModalProps } from './interfaces';
import {
  Container,
  LargeStyle,
  SmallStyle,
  Title,
  Description,
  FieldsContainer,
  ContentContainer,
} from './styles';

const FieldsModal: React.FC<FieldsModalProps> = ({
  isMobile,
  isVisible,
  description,
  title,
  toggleVisibility,
  handleConfirm,
  fields,
  defaultValues,
  optionalStyles,
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handlePress = useCallback(async () => {
    setLoading(true);
    await handleConfirm();
    setLoading(false);
  }, []);

  const firstStyle: React.CSSProperties = isMobile ? SmallStyle : LargeStyle;
  const secondStyle: React.CSSProperties = optionalStyles || {};

  return (
    <Modal
      isVisible={isVisible}
      style={{ ...firstStyle, ...secondStyle }}
    >
      <Container>
        <ContentContainer>
          <Title>{title}</Title>

          <Description>{description}</Description>

          <FieldsContainer>
            <CreateItemFields fields={fields} defaultValues={defaultValues} />

            <ConfirmButton onClick={handlePress} isLoading={isLoading} />

            <BackButton onClick={toggleVisibility} />
          </FieldsContainer>
        </ContentContainer>
      </Container>
    </Modal>
  );
};

export default FieldsModal;
