import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  padding: 10px 30px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex: 2;
`;

export const Input = styled.input`
  height: 60px;
  padding: 18px 10px;
  color: ${({ theme }) => theme.colors.inputGrey};
  font-family: ${({ theme }) => theme.fonts.primary};
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
