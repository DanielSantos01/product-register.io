/* eslint-disable no-undef */
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export const Container = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  color: ${({ theme }) => theme.colors.titleGrey};
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ArrowIcon = styled(IoIosArrowForward)<{isOpen: boolean}>`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.titleGrey};
  animation: ${({ isOpen }) => (isOpen ? 'rotate90' : 'rotate-90')} 250ms forwards;
  z-index: -1;
`;
