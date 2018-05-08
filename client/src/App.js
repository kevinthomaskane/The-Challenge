import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Main from "./Pages/Main";
import Landing from "./Components/Landing";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/main/:id" component={Main} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
