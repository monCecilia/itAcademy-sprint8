import React from "react";
import { useState, useEffect } from "react";
import { Jumbotron, Button, Title, TextJoke } from "../Styled";

function Jokes({ loading }) {
  const [jokesState, setJokesState] = useState(null);

  useEffect(() => {
    getJoke();
  }, [loading]);

  // HTTP Request
  const getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((dataJoke) => setJokesState(dataJoke));
  };

  if (jokesState === null) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="d-flex justify-content-center">
      <Jumbotron>
        <Title>START YOUR DAY SMILING</Title>
        <TextJoke>{jokesState.joke}</TextJoke>
        <Button className="btn-lg btn-block" onClick={() => getJoke()}>
          Another Joke!
        </Button>
      </Jumbotron>
    </div>
  );
}

export default Jokes;
