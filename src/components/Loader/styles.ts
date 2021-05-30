import styled from 'styled-components';

import { LoaderProps } from './interfaces';

export const Loader = styled.div<LoaderProps>`
  animation: is-rotating 1s infinite;
  border: ${({ contentWidth }) => (contentWidth ? `${contentWidth}px` : '4px')} solid transparent;
  border-radius: 50%;
  border-top-color: ${({ color }) => color || '#fff'};
  height: ${({ size }) => (size ? `${size}px` : '30px;')};
  width: ${({ size }) => (size ? `${size}px` : '30px;')};
`;
