import styled from 'styled-components';

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.titleGrey};
  text-align: center;
  margin-bottom: 20px;
`;
