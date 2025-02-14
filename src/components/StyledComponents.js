import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Container = styled.div`
  width: 66.67vw;
  padding: 20px;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const GoBackButton = styled.button`
  background-color: #2508c9; 
  color: white; 
  font-size: 18px; 
  padding: 15px 30px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  
  display: block;
  margin: 50px auto; 

  &:hover {
    background-color: #D2B04C; 
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: #000;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  text-align: start;
  margin-left: 10%;
  font-size: 25px;
  background-color: #180680;
  color: white;
  padding: 8px;
  margin: 0;
  margin-left: -20px;
  display: block;
  min-width: 200px;
  max-width: 300px;
  font-weight: bold;
  margin-bottom: 10px;
  box-sizing: border-box;
`;


export const HeaderContainer = styled.header`
  text-align: left;
  font-size: 25px;
  word-spacing: 5px;
  margin-top: 10px;
  margin-bottom: 100px;
  margin-left: 50px;
  min-width: 1500px;
  max-width: 800px;
`;


export const WorkshopsContainer = styled.section`
  margin-bottom: 30px;
`;

export const LigneDash = styled.div`
  border-top: 3px dashed black;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-right: 80px;
  margin-left: 90px;
  min-width: 1000px;
  max-width: 2000px;
`;

export const LignePoints = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: transparent;
  min-width: 1000px;
  max-width: 2000px;
`;

export const Point = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 9px solid #2508c9;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-100%);
  left: 5%;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-120%) scale(1.2); 
    background-color: #2508c9; 
  }
`;

export const PointBleu = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 9px solid #2508c9;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-100%);
  left: 39%;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-120%) scale(1.2); 
    background-color: #2508c9; 
  }
`;

export const PointYellow = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: white;
  border: 9px solid #D2B04C;
  border-radius: 50%;
  top: 0%;
  transform: translateY(-100%);
  left: 72%;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
  transform: translateY(-120%) scale(1.2); 
  background-color: #D2B04C; 
  }
`;

export const WorkshopList = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-top: 1px;
  margin-bottom: 90px;
`;

export const WorkshopItem = styled.div`
  flex: 1;
  padding: 15px;
  text-align: left;
  margin: 5px;
  border-radius: 5px;
  margin-left: 5%;
  width: 250px;
  min-width: 300px;
  max-width: 500px;
  transition: background-color 0.3s ease;

  &:hover:not(:nth-child(3)) {
    background-color: #D2B04C;
  }

  &:nth-child(3):hover {
    background-color: #2508c9;
  }

  p {
    margin-top: 60px;
  }

  &:nth-child(1) h3,
  &:nth-child(2) h3 {
    color: #2508c9;
  }

  &:nth-child(3) h3 {
    color: #D2B04C;
  }
`;


export const ActivitiesContainer = styled.section`
  margin-bottom: 30px;
  margin-top: 30px;
  width: 1620px;
  box-sizing: border-box;
`;

export const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 100px;
`;

export const Activity = styled.div`
  background: #eef;
  padding: 150px;
  border-radius: 0px;
  margin-right: -200px;
`;

export const ActivityContainer = styled.div`
  background-color: transparent;
  width: 100%;
  text-align: left;
  margin-top: -130px;
  margin-left: -150px;
`;

export const ActivityContainer2 = styled.div`
  background-color: transparent;
  width: 50%;
  text-align: left;
  margin-top: -120px;
  margin-left: 400px;
`;

export const ActivityYellow = styled.section`
  background-color: #fffce4;
  padding: 0px;
  border-radius: 0px;
  margin-left: 200px;
  margin-right: 20px;
`;

export const ActivityList = styled.ul`
  padding-left: 50px;
  margin: 0;
  list-style-type: none; 
`;

export const PhraseBleu = styled.li`
  &::before {
    content: "\\2022";
    color: #2508c9;
    font-size: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
  list-style-type: none; 
`;

export const PhraseJaune = styled.li`
  &::before {
    content: "\\2022";
    color: #D2B04C;
    font-size: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
  list-style-type: none; 
`;


export const ActorsContainer = styled.section`
  margin-top: 30px;
  margin-bottom: 90px;
  width: 1620px;
  box-sizing: border-box;
`;

export const ActorsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ActorSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 10px; 
  padding: 20px 10px;
  background-color: ${props => props.bgColor || '#eef'};
  border-radius: 5px;
  margin: 5px 0;
  font-size: 18px;

  svg {
    font-size: 16px; 
    color: black; 
  }
`;

export const ImageSectionContainer = styled.div`
  width: 33.33vw;   
  height: auto;  
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;  
  height: auto;  
  object-fit: cover;
  display: block;
`;
