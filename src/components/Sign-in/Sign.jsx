import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  auth,
  signInWithGooglePopup,
  signInwithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = ({ click }) => {
  const [signFields, setSignFields] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignFields({ ...signFields, [name]: value });
  };

  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Sign in with your email.</h1>
          <p>
            don't have an account ? <a onClick={click}>Register</a>
          </p>
          <form>
            <div className="text-field">
              <input type="email" name="email" onChange={handleChange} required />
              <label className="shrink">Email</label>
            </div>
            <div className="text-field">
              <input
                type={showPass ? "text" : "password"}
                onChange={handleChange}
                name="password"
                required
              />
              <label className="shrink">Password</label>
              <div onClick={togglePassword}>
                {showPass ? (
                  <AiFillEye className="password__icon" />
                ) : (
                  <AiFillEyeInvisible className="password__icon" />
                )}
              </div>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password ?</a>
            </div>
            <button type="submit">Login</button>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
