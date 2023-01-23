import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignUp, ResponsiveAppBar, Calendar, Schedule, Specialist, SignIn,Doctors } from "./components";

function App() {
  return (
      <Router>
        <div ClassName="navbar">
          <ResponsiveAppBar />
            <Switch>
              <Route exact path="/">
                <Specialist />
              </Route>
              <Route exact path="/calendar">
                <Calendar />
              </Route>
              <Route exact path="/doctors">
                <Doctors />
              </Route>
              <Route exact path="/schedule">
                <Schedule />
              </Route>
              <Route exact path="/precios">
                <h1>Precios</h1>
              </Route>
              <Route exact path="/contacto">
                <h1>Contactos</h1>
              </Route>
              <Route path="/signin" exact>
                <SignIn />
              </Route>
              <Route path="/SignUp" exact>
                <SignUp />
              </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
