import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionTitle, WorkshopsContainer, WorkshopItem, LigneDash, LignePoints, Point, PointBleu, PointYellow, WorkshopList } from "./StyledComponents";

const Workshops = () => {
  const navigate = useNavigate(); 

  return (
    <WorkshopsContainer>
      <SectionTitle>Workshops</SectionTitle>
      <LigneDash />
      <div>
        <LignePoints>
          <div onClick={() => navigate("/PROTOTYPING")} style={{ cursor: "pointer" }}>
            <Point />
          </div>
          <div onClick={() => navigate("/TESTING")} style={{ cursor: "pointer" }}>
            <PointBleu />
          </div>
          <div onClick={() => navigate("/FINAL-REPORT")} style={{ cursor: "pointer" }}>
            <PointYellow />
          </div>
        </LignePoints>
      </div>
      <WorkshopList>
        <WorkshopItem onClick={() => navigate("/PROTOTYPING")} style={{ cursor: "pointer" }}>
          <h3>6 - PROTOTYPING</h3>
          <p>Put all the previous activities’ outputs together to build an interactive prototype</p>
        </WorkshopItem>
        <WorkshopItem onClick={() => navigate("/TESTING")} style={{ cursor: "pointer" }}>
          <h3>7 - TESTING</h3>
          <p>Organize testing sessions with a group of potential users (based on personas)</p>
        </WorkshopItem>
        <WorkshopItem onClick={() => navigate("/FINAL-REPORT")} style={{ cursor: "pointer" }}>
          <h3>8 - FINAL REPORT</h3>
          <p>Future roadmap suggestions</p>
        </WorkshopItem>
      </WorkshopList>
    </WorkshopsContainer>
  );
};

export default Workshops;
