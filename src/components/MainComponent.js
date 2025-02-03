import React from 'react';
import Header from './Header';
import Workshops from './Workshops';
import Activities from './Activities';
import Actors from './Actors';
import ImageSection from './ImageSection';
import { Container, FlexContainer } from './StyledComponents';

const MainComponent = () => {
  return (
    <FlexContainer>
      <Container>
        <Header />
        <Workshops />
        <Activities />
        <Actors />
      </Container>
      <ImageSection />
    </FlexContainer>
  );
};

export default MainComponent;
