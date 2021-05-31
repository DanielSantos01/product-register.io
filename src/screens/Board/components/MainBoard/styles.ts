import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px 10px 20px 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media(max-width: 768px) {
    padding: 10px 0px;
  }
`;
