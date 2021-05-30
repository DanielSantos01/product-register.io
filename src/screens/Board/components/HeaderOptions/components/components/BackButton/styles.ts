import styled from 'styled-components';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 250ms;
  width: 100%;
  align-items: flex-start;
`;

export const BackIcon = styled(IoIosArrowRoundBack)`
  font-size: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleGrey};
`;
