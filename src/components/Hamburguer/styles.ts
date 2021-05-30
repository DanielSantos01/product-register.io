import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 60px;
  padding: 5px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 6px;
  opacity: 0.6;

  :active {
    opacity: 0.5;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 8px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  height: 3px;
  width: 100%;
  background-color: white;
  opacity: 0.7;
`;
