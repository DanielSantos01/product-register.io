import React from 'react';

import { HeaderProps } from './interfaces';
import {
  Container,
  HeaderTitleContainer,
  HeaderTitle,
  InfoContainer,
  Description,
  RowContainer,
} from './styles';

const Header: React.FC<HeaderProps> = ({
  children,
  customIcon,
  title,
  description,
}) => (
  <Container>
    <RowContainer>
      <HeaderTitleContainer>
        {customIcon}
        <InfoContainer>
          <HeaderTitle>{title}</HeaderTitle>
          {description && <Description>{description}</Description>}
        </InfoContainer>
      </HeaderTitleContainer>
      {children}
    </RowContainer>
  </Container>
);

export default Header;
