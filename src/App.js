import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome.js";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Navigation from "./components/navigation/Navigation.js";
import FourOhFour from "./components/fourohfour/FourOhFour.js";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="Ben" />}
          />
          <Route
            exact
            path="/welcome/:name"
            render={(props) => <Welcome {...props} name="Ben" />}
          />
          <Route path="/jeopardy" component={Jeopardy} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
