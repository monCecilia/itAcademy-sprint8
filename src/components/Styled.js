import styled from "styled-components";
import WeatherBg from "../img/WeatherBg.png";
import MovilBg from "../img/MovilBg.png";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#FAFAFA" : "#FAFAFA")};
  color: ${(props) => (props.primary ? "#AD9EEF" : "#AD9EEF")};
  border: 2px solid;
  border-radius: 3px;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 

   }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size:1.3rem;
    padding:1rem;
   }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  
  }
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${MovilBg});
  padding: 2rem;
  

   /* Medium devices (tablets, 768px and up) */
   @media (min-width: 768px) { 
    background-image: url(${WeatherBg});
    font-size:1em;
    padding: 3rem;
   
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    padding: 4rem;

  }
  
`;
export const Card = styled.div`
  background-color: #ad9eef;
  color: #fafafa;
  padding: 1rem;
  width: 50vw;
   /* Medium devices (tablets, 768px and up) */
   @media (min-width: 768px) { 
    width: 40vw;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 30vw;

  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 20vw;
 
  }
  `;

export const Jumbotron = styled.div`
  background-color: #ad9eef;
  color: #fafafa;
  padding: 2rem;
  margin-top: 3rem;
  
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    width: 80vw;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    width: 60vw;

  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    width: 40vw;
  }


`;

export const Title = styled.p`
  color: #fafafa;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 2.8rem;
  line-height:2.5rem;
  margin-bottom:0px;

  
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
  font-size: 3.2rem;
  line-height:3rem;

  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 4rem;
    line-height:3.5rem;

  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 4.3rem;
    line-height:4rem;
  }
  
`;
export const TextJoke = styled.p`
  color: #fafafa;
  padding: 1rem;
  font-weight: 100;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    font-size: 1.3rem;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    


  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
   
  }
  
`;
export const TextWeather = styled.p`
  color: #fafafa;
  font-weight: 100;
  margin-bottom:0px;
  
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    font-size: 1.4rem;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1.5rem;

  }
  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
   
  }
  
`;
