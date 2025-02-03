import React from 'react';
import { FaLightbulb, FaClock, FaUser, FaUsers } from 'react-icons/fa'; 
import { SectionTitle, ActorsContainer, ActorsGrid, ActorContainer, ActorSpan } from './StyledComponents';

const Actors = () => (
  <ActorsContainer>
    <SectionTitle>Actors</SectionTitle>
    <ActorsGrid>
      <ActorContainer>
        <ActorSpan bgColor="#eef">
          <FaLightbulb /> 
          <p>Remote workshop + in-house work</p>
        </ActorSpan>
        <ActorSpan bgColor="#eef">
          <FaClock /> 
          <p>V2D + 7D</p>
        </ActorSpan>
        <ActorSpan bgColor="#eef">
          <FaUser /> 
          <p>Name + LBS</p>
        </ActorSpan>
      </ActorContainer>
      <ActorContainer>
        <ActorSpan bgColor="#eef">
          <FaLightbulb />
          <p>Remote workshop</p>
        </ActorSpan>
        <ActorSpan bgColor="#eef">
          <FaClock />
          <p>1D</p>
        </ActorSpan>
        <ActorSpan bgColor="#eef">
          <FaUsers />
          <p>LBS + Testers</p>
        </ActorSpan>
      </ActorContainer>
      <ActorContainer>
        <ActorSpan bgColor="#fffce4">
          <FaLightbulb />
          <p>In-house work</p>
        </ActorSpan>
        <ActorSpan bgColor="#fffce4">
          <FaClock />
          <p>?D</p>
        </ActorSpan>
        <ActorSpan bgColor="#fffce4">
          <FaUser />
          <p>LBS</p>
        </ActorSpan>
      </ActorContainer>
    </ActorsGrid>
  </ActorsContainer>
);

export default Actors;
