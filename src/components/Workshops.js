import React from 'react';
import { SectionTitle, WorkshopsContainer, WorkshopItem, LigneDash, LignePoints, Point, PointBleu, PointYellow, WorkshopList } from './StyledComponents';

const Workshops = () => {
  return (
    <WorkshopsContainer>
      <SectionTitle>Workshops</SectionTitle>
      <LigneDash />
      <LignePoints>
        <Point />
        <PointBleu />
        <PointYellow />
      </LignePoints>
      <WorkshopList>
        <WorkshopItem>
          <h3>6 - PROTOTYPING</h3>
          <p>Put all the previous activities’ outputs together to build an interactive prototype</p>
        </WorkshopItem>
        <WorkshopItem>
          <h3>7 - TESTING</h3>
          <p>Organize testing sessions with a group of potential users (based on personas)</p>
        </WorkshopItem>
        <WorkshopItem>
          <h3>8 - FINAL REPORT</h3>
          <p>Future roadmap suggestions</p>
        </WorkshopItem>
      </WorkshopList>
    </WorkshopsContainer>
  );
};

export default Workshops;
