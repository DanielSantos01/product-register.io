import styled from 'styled-components';
import { IoMdPerson } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const UserIcon = styled(IoMdPerson)`
  font-size: 25px;
  margin-bottom: 2px;
  color: white;
`;
