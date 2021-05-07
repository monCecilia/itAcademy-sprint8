import styled from "styled-components";
import WeatherBg from "../img/WeatherBg.png";
import MovilBg from "../img/MovilBg.png";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#FAFAFA" : "#FAFAFA")};
  color: ${(props) => (props.primary ? "#AD9EEF" : "#AD9EEF")};
  font-size: 2vw;
  padding: 2vh 2vw;
  border: 2px solid;
  border-radius: 3px;
  @media (max-width: 1100px) {
    font-size: 4vw;
    line-height: 1vh;
    padding: 4vh 4vw;
  }
`;

export const Container = styled.div`
  padding: 2rem;
  background-image: url(${WeatherBg});
  height: 100vh;
  background-position: center;
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    background-image: url(${MovilBg});
  }
`;
export const Card = styled.div`
  background-color: #ad9eef;
  color: #fafafa;
  padding: 2vw;
  margin-top: 1rem;
  margin-right: 10rem;
  width: 40vw;

  @media (max-width: 1100px) {
    padding: 4vw;
    margin-top: 1rem;
    margin-right: 1.5rem;
    width: 60vw;
  }
`;

export const Jumbotron = styled.div`
  background-color: #ad9eef;
  color: #fafafa;
  padding: 2vw;
  margin-top: 4rem;
  width: 60vw;

  @media (max-width: 1100px) {
    padding: 4vw;
    margin-top: 0.5rem;
    margin-right: 1rem;
    width: 90vw;
    margin-top: 3rem;
  }
`;

export const Title = styled.p`
  color: #fafafa;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 6vw;
  line-height: 9vh;
  @media (max-width: 1100px) {
    font-size: 13vw;
    line-height: 8vh;
  }
`;
export const TextJoke = styled.p`
  color: #fafafa;
  padding: 1rem;
  font-weight: 100;
  font-size: 3vw;
  line-height: 6vh;
  @media (max-width: 768px) {
    font-size: 7vw;
    line-height: 4vh;
  }
  @media (max-width: 1024px) {
    font-size: 7vw;
    line-height: 5vh;
  }
`;
export const TextWeather = styled.p`
  color: #fafafa;
  font-weight: 100;
  font-size: 2vw;
  line-height: 3vh;
  @media (max-width: 1024px) {
    font-size: 4vw;
    line-height: 1vh;
  }
`;
