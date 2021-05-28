import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 20%;
  min-width: 10%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.confirmGreen};
  opacity: 0.9;
  transition: 200ms;

  :hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    opacity: 1;
  }
`;
