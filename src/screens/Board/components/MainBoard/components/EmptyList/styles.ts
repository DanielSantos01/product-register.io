import styled from 'styled-components';
import { FiAlertCircle } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const AlertIcon = styled(FiAlertCircle)`
  font-size: 35px;
  color: ${({ theme }) => theme.colors.headerSecondary};
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.headerSecondary};
  text-align: center;
`;
