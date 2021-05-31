import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 70px;
  background-image: linear-gradient(-220deg, #032c62, #03001c);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  width: 100%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
`;

export const HeaderTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 15px;
  font-weight: 600;
  color: white;
  padding-left: 10px;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 11px;
  padding-left: 10px;
  color: white;
`;
