import React from 'react';
import styled from 'styled-components';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import { Button, Container } from '../../shared';

const SignInContainer = styled(Container)`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const SignInTitle = styled.h2`
  font-size: 2rem;
`;
const SignInInstruction = styled.p`
  font-size: 2rem;
`;

const FormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 2rem;
`;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInInstruction>
          Sign in with your email and password
        </SignInInstruction>
        <form
          action="post"
          onSubmit={this.onFormSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
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
          <Button as="input" type="submit" value="SIGN IN" />
          <Button
            as="input"
            onClick={signInWithGoogle}
            type="button"
            value="SIGN IN WITH GOOGLLE"
          />
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
