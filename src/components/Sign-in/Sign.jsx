import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import {
  auth,
  signInWithGooglePopup,
  signInwithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

const SignIn = ({ click }) => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Sign in with your email.</h1>
          <p>
            don't have an account ? <a onClick={click}>Register</a>
          </p>
          <div className="text-field">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="text-field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password ?</a>
          </div>
          <input type="submit" value="Login" />
          <div className="divider-text">
            <hr />
            <div className="divider-header">
              <p>Or continue with</p>
            </div>
          </div>
          <div className="sign-icons">
            <FcGoogle onClick={logGoogleUser} className="google__icon" />
          </div>
          <div className="sign-footer">
            <p>
              By Clicking the button above, you agree to our <span>terms of use</span> and
              <span> privacy policies</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
