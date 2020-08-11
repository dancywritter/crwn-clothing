import React, { useState } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Problem loggin in', error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="submit"
            onClick={handleGoogleSignIn}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
