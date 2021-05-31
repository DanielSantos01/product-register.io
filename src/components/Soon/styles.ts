import styled from 'styled-components';
import { FiTool } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const TollIcon = styled(FiTool)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.lighterGreen};
`;

export const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lighterGreen};
`;
