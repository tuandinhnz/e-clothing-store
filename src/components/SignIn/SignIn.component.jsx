import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { googleSignInStart, emailSignInStart } from '../../actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';

class SignIn extends React.Component {
  state = { email: '', password: '' };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({
      email: email,
      password: password,
    });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onFormSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.onInputChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
            label="password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
