import React from "react";
import axios from "axios";
import {Grid, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";

const Landing = () => {

      return (
        <Grid>
          <Row className="show-grid">
              <Col md={4}>The Challenge <br/>
              Put your personal development first
              </Col>
              <Col md={8}></Col>
          </Row>
        </Grid>
      )
    } 

export default Landing;
