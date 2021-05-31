import styled from 'styled-components';
import { IoMdPricetag } from 'react-icons/io';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 70px;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.09);
  padding: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: 200ms;

  .visible-on-hover {
    display: none;
  }

  @media(max-width: 768px) {
    border-radius: 0px;
  }

  :hover {
    .visible-on-hover {
      display: block;
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const RightContaner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.titleGrey};
  padding-left: 18px;
  white-space: nowrap;

  @media(max-width: 768px) {
    font-size: 10px;
  }
`;

export const Desciption = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.titleGrey};
  padding-left: 50px;
  margin-top: 17px;
  font-style: italic;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const TagIcon = styled(IoMdPricetag)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lighterGreen};
  margin-top: 2px;
  margin-right: 5px;
`;

export const EditIcon = styled(FiEdit)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.titleGrey};
  cursor: pointer;
  position: absolute;
  right: 70px;
`;

export const DeleteIcon = styled(FiTrash2)`
  font-size: 18px;
  color: red;
  opacity: 0.8;
  cursor: pointer;
  position: absolute;
  right: 35px;
`;

export const AuxContainer = styled.div`
  width: 10px;
  overflow: hidden;
`;
