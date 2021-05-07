import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Weather from "./components/WeatherComponent/Weather";
import Jokes from "./components/JokesComponent/Jokes";
import { Container } from "./components/Styled";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Weather />
            <Jokes />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
