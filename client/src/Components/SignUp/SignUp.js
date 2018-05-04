import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Grid, Row, Col} from "react-bootstrap";

class SignUp extends React.Component {

  state = {
    name: "",
    username: "",
    password: ""
  }

  componentDidMount = () => {

  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    let field = e.target.name;
    this.setState({[field] : e.target.value});
  }

  handleSubmit = () => {
    axios.post("/api/newUser", {name: this.state.name, username: this.state.username, password: this.state.password}).then((response) => {
      console.log(response);
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <p>What is your full name?</p>
              <input onChange={this.handleInputChange} type="text" name="name"/>
              <p>Username?</p>
              <input onChange={this.handleInputChange} type="text" name="username"/>
              <p>Password?</p>
              <input onChange={this.handleInputChange} type="text" name="password"/><br/>
              <button onClick={this.handleSubmit}>Sign Up</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  };

}

export default SignUp;
