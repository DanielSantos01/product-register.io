import styled from 'styled-components';

export const Input = styled.input`
  height: 60px;
  padding: 18px 10px;
  color: ${({ theme }) => theme.colors.inputGrey};
  font-family: ${({ theme }) => theme.fonts.secondary};
  border: 1px solid ${({ theme }) => theme.colors.inputGrey};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  min-width: 40%;
  width: 60%;
  margin-right: 10px;
  outline: none;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.headerSecondary};
  }
`;
