import React from 'react';

import presentationInfo from './data/info.json';
import {
  CheckIcon,
  Container,
  InfoContent,
  InfoRow,
  InfoDescription,
  TextContainer,
  Title,
} from './styles';

const ScreenInfo: React.FC = () => {
  const allInfos: JSX.Element[] = presentationInfo.map((info) => (
    <InfoRow>
      <CheckIcon />
      <TextContainer>
        <InfoContent>{info.title}</InfoContent>
        <InfoDescription>{info.desccription}</InfoDescription>
      </TextContainer>
    </InfoRow>
  ));

  return (
    <Container>
      <Title>DO MORE IN A BETTER WAY</Title>
      {allInfos}
    </Container>
  );
};

export default ScreenInfo;
