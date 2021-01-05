import React, { Component } from 'react';
import { login } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, Container} from "react-bootstrap";

//  If user enters wrong password then through error.

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <Container>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <Button type="submit">Login</Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default connect(null, { login })(Login);
