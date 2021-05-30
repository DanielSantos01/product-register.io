import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  .move-on-hover {
    animation: move-back 250ms forwards;
  }
  .visible-on-hover {
    animation: go-out 250ms forwards;
  }

  .appear-on-hover {
    animation: disappear-to-left 250ms forwards;
  }

  .slide-on-hover {
      animation: inverse-move-back 250ms forwards;
    }

  :hover {
    .move-on-hover {
      animation: move-front 250ms forwards;
    }
    .visible-on-hover {
      animation: go-in 250ms forwards;
    }

    .appear-on-hover {
      animation: comes-from-left 250ms forwards;
    }

    .slide-on-hover {
      animation: inverse-move-front 250ms forwards;
    }
  }
`;

export const TextContet = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  color: white;
`;

export const RightArrowIcon = styled(IoIosArrowForward)`
  font-size: 28px;
  color: white;
`;

export const LeftArrowIcon = styled(IoIosArrowBack)`
  font-size: 28px;
  color: white;
`;
