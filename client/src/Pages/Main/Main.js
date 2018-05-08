import React from "react";
import axios from "axios";
import {Grid, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

var userId = localStorage.getItem("userId");

class Main extends React.Component {

  state = {
    userInfo: {}
  }

  componentDidMount = () => {
    axios.get("/api/userInfo/" + userId).then((response) => {
      console.log(response)
    });
  };

  getChallenge = () => {
    axios.get("/api/currentChallenge/" + userId).then((response) => {
      
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">Your Challenge this week: </div>
        </div>
      </div>
    )
  }


};

export default Main;