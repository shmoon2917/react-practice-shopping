import React from 'react';

import { SignInAndUpPageContainer } from './sign-in-up.styles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndUpPage = () => {
  return (
    <SignInAndUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInAndUpPageContainer>
  );
};

export default SignInAndUpPage;
