/* eslint-disable no-undef */
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 70px;
  z-index: 10;
  width: 100%;
  height: ${window.innerHeight - 70}px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: transparent;
  z-index: -10000;
`;
