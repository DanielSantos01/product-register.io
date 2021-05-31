import styled from 'styled-components';

import Input from '@components/Input';

export const FieldInput = styled(Input)`
  width: 100%;
  margin: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0.07);
  transition: background 300ms;

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
`;
