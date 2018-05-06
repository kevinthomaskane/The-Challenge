import React from "react";
import axios from "axios";
import {Grid, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

class Header extends React.Component {

  state = {
    loggedIn: false
  }

  componentDidMount = () => {

  }

  render(){
    if (!this.state.loggedIn){
      return (
        <Grid>
          <Row className="show-grid">
              <Col md={4}></Col>
              <Col md={4}>The Challenge</Col>
              <Col md={2}><Link to="/login">Sign In</Link></Col>
              <Col md={2}><Link to="/SignUp">Sign Up</Link></Col>
          </Row>
        </Grid>
      )
    }
  }


};

export default Header;