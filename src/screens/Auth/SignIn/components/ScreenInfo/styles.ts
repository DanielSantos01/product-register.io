import styled from 'styled-components';
import { IoIosCheckmark } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: item-go-down 2s forwards;
  margin-bottom: 20px;

  @keyframes item-go-down {
    from {
        opacity: 0;
        transform: translateX(50%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
  }
`;

export const InfoContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 18px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 14px;
  opacity: 0.9;
  font-style: italic;
  color: rgba(0, 0, 0, 0.5);
`;

export const CheckIcon = styled(IoIosCheckmark)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.confirmGreen};
`;
