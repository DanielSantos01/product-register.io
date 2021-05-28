import styled from 'styled-components';

export const Input = styled.input`
  height: 60px;
  padding: 18px 10px;
  color: ${({ theme }) => theme.colors.backgroundErased};
  font-family: ${({ theme }) => theme.fonts.terciary};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 17px;
  min-width: 40%;
  width: 60%;
  margin-right: 10px;
  outline: none;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  }
`;
