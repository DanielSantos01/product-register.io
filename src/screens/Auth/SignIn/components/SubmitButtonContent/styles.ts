import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .move-on-hover {
    animation: move-back 250ms forwards;
  }
  .visible-on-hover {
    animation: go-out 250ms forwards;
  }

  :hover {
    .move-on-hover {
      animation: move-front 250ms forwards;
    }
    .visible-on-hover {
      animation: go-in 250ms forwards;
    }
  }

  @media(max-width: 768px) {
    .move-on-hover {
      animation: none;
    }
    .visible-on-hover {
      display: none;
    }

    :hover {
      .move-on-hover {
        animation: none;
      }
    }
  }
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 25px;
  color: white;
`;

export const TextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 600;
  color: white;
`;
