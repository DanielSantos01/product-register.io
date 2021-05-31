import styled from 'styled-components';
import { IoMdPerson } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${window.innerHeight}px;
  overflow: hidden;
`;

export const UserIcon = styled(IoMdPerson)`
  font-size: 25px;
  margin-bottom: 2px;
  color: white;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;
