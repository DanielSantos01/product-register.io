import styled from 'styled-components';
import { IoIosCube } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  animation: go-down 500ms forwards;
  padding-bottom: 15px;

  @media(max-width: 768px) {
    .hidden-md {
      display: none;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
  padding: 10px 30px;
  margin: 50px 0px;
  width: 100%;
  z-index: -10;
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
  width: 50%;
  z-index: -10;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const RegistrationInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.borderGrey};
  margin-top: 20px;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  padding: 0px 10px;
`;

export const CubeIcon = styled(IoIosCube)`
  font-size: 25px;
  margin-bottom: 2px;
  color: white;
`;
