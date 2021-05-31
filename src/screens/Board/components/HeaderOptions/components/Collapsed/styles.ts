/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

import Input from '@components/Input';

interface OptionalProps {
  isVisible?: boolean;
  hasBorder?: boolean;
}

export const Container = styled.div<OptionalProps>`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 15px;
`;

export const RowContainer = styled.div<{ hasBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  border-radius: 10px;
  padding: 10px;
  margin: 0px 7px 15px 7px;
  background-color: rgba(0, 0, 0, 0.07);
  border: ${({ theme, hasBorder }) => (hasBorder ? `1px solid ${theme.colors.discretGrey}` : 'none')};
  cursor: pointer;
  transition: 250ms;

  :hover {
    transform: scale(0.98);
  }
`;

export const TextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.titleGrey};
  font-weight: 600;
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.titleGrey};
`;
