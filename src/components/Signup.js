import React, { Component } from 'react';
import { signup } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, Container} from "react-bootstrap";


class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history);
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
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <Button type="submit">Signup</Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default connect(null, { signup })(Signup);
