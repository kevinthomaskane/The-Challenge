import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Grid, Row, Col} from "react-bootstrap";

class SignUp extends React.Component {

  state = {
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
    let token = "t"+Math.random();
    axios.post("/api/login", {token: token, username: this.state.username, password: this.state.password}).then((response) => {
      console.log(response);
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <input onChange={this.handleInputChange} type="text" placeholder="username" name="username"/><br/>
              <input onChange={this.handleInputChange} type="text" placeholder="password" name="password"/>
              <button onClick={this.handleSubmit}>Sign In</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  };

}

export default SignUp;