import React from 'react';
import styled from 'styled-components';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { Button, Container } from '../../shared';

const SignUpContainer = styled(Container)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const SignUpTitle = styled.h2`
  font-size: 2rem;
`;
const SignUpInstruction = styled.p`
  font-size: 2rem;
`;

const FormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 2rem;
`;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <SignUpInstruction>
          Sign up with your email and password
        </SignUpInstruction>
        <form
          action="post"
          onSubmit={this.onFormSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <FormInput
            type="text"
            name="displayName"
            placeholder="DisplayName"
            onChange={this.onInputChange}
            value={this.state.displayName}
            label="displayname"
            required
          />
          <FormInput
            type="text"
            name="email"
            placeholder="email"
            onChange={this.onInputChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="text"
            name="password"
            placeholder="password"
            onChange={this.onInputChange}
            value={this.state.password}
            label="password"
            required
          />
          <FormInput
            type="text"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.onInputChange}
            value={this.state.confirmPassword}
            label="confirmpassword"
            required
          />
          <Button as="input" type="submit" value="SIGN UP" />
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
