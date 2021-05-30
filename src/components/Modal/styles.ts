import styled from 'styled-components';

import { ModalProps } from './interfaces';

export const Container = styled.div<ModalProps>`
  position: absolute;
  top: 70px;
  z-index: 10;
  padding: 50px 15px;
  width: 100%;
  height: ${window.innerHeight - 70};
  animation: ${({ isVisible }) => (isVisible ? 'show-modal' : 'hide-modal')} 250ms forwards;
  transition: background 250ms;
  overflow-y: auto;
  overflow-x: hidden;
`;
