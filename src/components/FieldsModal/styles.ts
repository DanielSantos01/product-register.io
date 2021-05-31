import React from 'react';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 40%;
  padding-bottom: 50px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
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
