import React from 'react';

import {
  Container,
  HeaderTitleContainer,
  CubeIcon,
  HeaderTitle,
} from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <HeaderTitleContainer>
      <CubeIcon />
      <HeaderTitle>ProductRegister.io</HeaderTitle>
    </HeaderTitleContainer>
    {children}
  </Container>
);

export default Header;
