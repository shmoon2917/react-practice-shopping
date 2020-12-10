import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='password'
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      googleSignInStart,
      emailSignInStart,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(SignIn);
