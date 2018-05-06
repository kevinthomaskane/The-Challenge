import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import {Grid, Row, Col} from "react-bootstrap";

class SignIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  componentDidMount = () => {
    
  };

  handleInputChange = (e) => {
    let field = e.target.name;
    this.setState({[field] : e.target.value});
  }

  checkLogin = () => {
    this.props.history.push('/SignUp');
  }

  handleSubmit = () => {
    let token = "t"+Math.random();
    axios.post("/api/login", {token: token, username: this.state.username, password: this.state.password}).then((response) => {
      if (response.data === null){
        alert("incorrect login or password");
      } else {
        console.log(response)
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId", response.data.id);
        this.setState({username: "", password: ""});
        this.checkLogin();
      };
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <input onChange={this.handleInputChange} type="text" value={this.state.username} placeholder="username" name="username"/><br/>
              <input onChange={this.handleInputChange} type="text" value={this.state.password} placeholder="password" name="password"/>
              <button onClick={this.handleSubmit}>Sign In</button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  };

}

export default withRouter(SignIn);