import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 40%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;
