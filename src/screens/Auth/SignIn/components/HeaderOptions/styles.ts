/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import styled from 'styled-components';

type OptionalProps = {
  underline?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  width: 100%;
`;

export const AuxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  min-width: 90px;
  padding: 10px;
  transition: 400ms;
  transform: scale(0.98);

  :hover {
    cursor: pointer;
  }
`;

export const SignUpButton = styled(ModelContainer)`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  :hover {
    transform: scale(1);
    cursor: pointer;
  }

  :active {
    transform: scale(0.98);
  }
`;

export const TextContent = styled.p<OptionalProps>`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2px;
  
  :hover {
    text-decoration: ${({ underline }) => (underline ? 'underline;' : 'none;')};
  }
`;

export const FieldInput = styled.input`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background-color: #2a3044;
  outline: none;
  font-size: 16px;
  padding: 18px 10px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border: none;
  margin-right: 15px;
`;
