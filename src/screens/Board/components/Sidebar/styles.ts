import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  height: ${window.innerHeight - 70}px;
  width: 500px;
  border-right: 1px solid ${({ theme }) => theme.colors.discretGrey};
  overflow: hidden;

  @media(max-width: 768px) {
    width: 100%;
    height: 50px;
    border: none;
    align-items: center;
    padding: 10px;
  }
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  color: ${({ theme }) => theme.colors.titleGrey};
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;
