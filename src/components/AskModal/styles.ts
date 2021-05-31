import React from 'react';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 30px;

  @media(max-width: 600px) {
    padding: 15px;
  }
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.titleGrey};
  font-weight: 800;
  font-size: 28px;
  margin-top: 15px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.titleGrey};
  font-style: italic;
  font-weight: 800;
  font-size: 16px;
`;

export const LargeStyle: React.CSSProperties = {
  padding: 0,
};

export const SmallStyle: React.CSSProperties = {
  height: '100%',
  padding: 0,
  top: 0,
  zIndex: 999,
};
