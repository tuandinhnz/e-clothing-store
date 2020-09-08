import React from 'react';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';
import { Row } from '../../shared';

const SignInSignUp = () => {
  return (
    <Row>
      <SignIn />
      <SignUp />
    </Row>
  );
};

export default SignInSignUp;
