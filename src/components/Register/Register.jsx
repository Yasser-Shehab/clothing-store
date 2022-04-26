import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Register({ click }) {
  const [formError, setFormError] = useState("");
  const [formSuccess, setformSuccess] = useState("");
  const [formData, setFormData] = useState(defaultFormData);
  const { displayName, email, password, confirmpassword } = formData;

  const inputs = [
    {
      id: 1,
      name: "displayName",
      type: "text",
      errorMessage: "Username should be 3-16 characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Please Provide a valid email address",
      label: "Email",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      errorMessage: " Should be 5-30 characters , one uppercase and one lowercase letter",
      pattern: "^(?=.*[a-z])(?=.*[A-Z]).{5,30}$",
      label: "Password",
      required: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: formData.password,
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setFormError((prev) => (prev = "Passwords Dont Match!"));
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setFormError((prev) => (prev = ""));
      setformSuccess((prev) => (prev = "Account has been Successfuly created"));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setFormError((prev) => (prev = "Email Already In use"));
      }
      console.log("user signUp Error :", error);
    }
  };
  const closeErrorMenu = () => {
    setFormError((prev) => (prev = ""));
  };
  const closeSuccessMenu = () => {
    setformSuccess((prev) => (prev = ""));
  };
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1>Register</h1>
          <p>
            Already have an account ? <a onClick={click}>Sign in</a>
          </p>
          <form onSubmit={handleSubmit} className="register-form">
            {formError && (
              <div className="register-error">
                <h3>{formError}</h3>
                <span onClick={closeErrorMenu}>✖</span>
              </div>
            )}
            {formSuccess && (
              <div className="register-success">
                <h3>{formSuccess}</h3>
                <span onClick={closeSuccessMenu}>✖</span>
              </div>
            )}
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={formData[input.name]}
                errorMessage={input.errorMessage}
                onChange={handleChange}
              />
            ))}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
