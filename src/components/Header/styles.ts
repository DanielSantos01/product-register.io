import styled from 'styled-components';
import { IoIosCube } from 'react-icons/io';

export const Container = styled.div`
  padding: 5px 25px;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(-220deg, #032c62, #03001c);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CubeIcon = styled(IoIosCube)`
  font-size: 30px;
  margin-bottom: 2px;
  color: white;
`;

export const HeaderTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding-left: 10px;
`;
