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

    @keyframes move-back {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-120%);
      }
    }
  }

  .visible-on-hover {
    animation: go-out 250ms forwards;

    @keyframes go-out {
      from {
        transform: translateX(0) scale(1);
      }
      to {
        transform: translateX(-100%) scale(0);
      }
    }
  }

  :hover {

    .move-on-hover {
      animation: move-front 250ms forwards;

      @keyframes move-front {
        from {
          transform: translateX(-120%);
        }
        to {
          transform: translateX(0);
        }
      }
    }
    .visible-on-hover {
      animation: go-in 250ms forwards;

      @keyframes go-in {
        from {
          transform: translateX(-100%) scale(0);
        }
        to {
          transform: translateX(0) scale(1);
        }
      }
    }
  }
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  font-size: 30px;
  color: white;
`;

export const TextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
