import React from "react";
import axios from "axios";
import {Grid, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Landing from "../Landing";

class Header extends React.Component {

  state = {
    loggedIn: false
  }

  componentDidMount = () => {
    if (localStorage.getItem("username")){
      this.setState({loggedIn: true});
    }
  }

  logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    this.setState({loggedIn: false});
  }

  render(){
    if (!this.state.loggedIn){
      return (
        <div>
        <Grid>
          <Row className="show-grid">
              <Col md={4}></Col>
              <Col md={4}>The Challenge</Col>
              <Col md={2}><Link to="/login">Sign In</Link></Col>
              <Col md={2}><Link to="/SignUp">Sign Up</Link></Col>
          </Row>
        </Grid>
        </div>
      )
    } else {
      return (
      <Grid>
          <Row className="show-grid">
              <Col md={4}></Col>
              <Col md={4}>The Challenge</Col>
              <Col md={2}>Welcome {localStorage.getItem("username")}</Col>
              <Col md={2}><a onClick={() => {
                this.logOut();
              }}>Log Out</a></Col>
          </Row>
        </Grid>
      )
    }
  }


};

export default Header;