/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import styled from 'styled-components';
import {
  IoIosAddCircle,
  IoIosCloseCircle,
  IoMdExit,
  IoIosBuild,
} from 'react-icons/io';

type OptionalProps = {
  underline?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 20px;
  width: 100%;
`;

export const AddIcon = styled(IoIosAddCircle)`
  font-size: 35px;
  opacity: 0.9;
  cursor: pointer;
  transition: 250ms;
  color: ${({ theme }) => theme.colors.lighterGreen};
  margin: 0px 15px;

  :hover {
    opacity: 1;
  }
`;

export const CloseIcon = styled(IoIosCloseCircle)`
  font-size: 35px;
  opacity: 0.9;
  cursor: pointer;
  transition: 250ms;
  color: red;
  margin: 0px 15px;

  :hover {
    opacity: 1;
  }
`;

export const ExitIcon = styled(IoMdExit)`
  font-size: 30px;
  opacity: 0.9;
  cursor: pointer;
  transition: 250ms;
  color: white;
  margin: 0px 15px;

  :hover {
    opacity: 1;
  }
`;

export const UpdateIcon = styled(IoIosBuild)`
  font-size: 30px;
  opacity: 0.9;
  cursor: pointer;
  transition: 250ms;
  color: white;
  margin: 0px 15px;

  :hover {
    opacity: 1;
  }
`;
