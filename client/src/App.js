import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path="/SignUp" component={SignUp} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
