import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Weather from './components/WeatherComponent/Weather'
import Jokes from './components/JokesComponent/Jokes'







function App() {
  return (
    <Router>
      <div className ="container">
        <Switch>
          <Route path= "/" exact>
                                  {/* Acá van los componentes principales */}
            <Weather />
            <Jokes />
            

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
