import React from 'react';

import { HeaderProps } from './interfaces';
import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  InfoContainer,
  Description,
} from './styles';

const Header: React.FC<HeaderProps> = ({
  children,
  customIcon,
  title,
  description,
}) => (
  <Container>
    <HeaderTitleContainer>
      {customIcon}
      <InfoContainer>
        <HeaderTitle>{title}</HeaderTitle>
        {description && <Description>(Desenvolvedor)</Description>}
      </InfoContainer>
    </HeaderTitleContainer>
    {children}
  </Container>
);

export default Header;
