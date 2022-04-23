import React, { useState } from "react";
import Register from "../../components/Register/Register";
import SignIn from "../../components/Sign-in/Sign";
import "./style/from.style.scss";

function Form() {
  const [isSignForm, setisSignForm] = useState(true);

  const toggle = () => {
    setisSignForm((prev) => !prev);
  };
  return <>{isSignForm ? <SignIn click={toggle} /> : <Register click={toggle} />}</>;
}

export default Form;
