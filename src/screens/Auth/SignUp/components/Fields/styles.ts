import styled from 'styled-components';

import Input from '@components/Input';

export const FieldInput = styled(Input)`
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  background-color: ${({ theme }) => theme.colors.discretGrey};
  transition: background 300ms;
  font-size: 12;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.discretGrey};
    background-color: white;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  height: 42px;
`;
