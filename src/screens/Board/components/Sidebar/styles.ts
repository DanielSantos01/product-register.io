import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight - 70}px;
  width: 300px;
  border-right: 1px solid ${({ theme }) => theme.colors.discretGrey};
`;
