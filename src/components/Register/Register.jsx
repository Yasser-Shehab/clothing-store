import React from "react";

function Register({ click }) {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Register</h1>
          <p>
            Already have an account ? <a onClick={click}>Sign in</a>
          </p>
          <div className="text-field">
            <input type="Text" required />
            <label>Name</label>
          </div>

          <div className="text-field">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="text-field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="text-field">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Register" />
        </div>
      </div>
    </>
  );
}

export default Register;
