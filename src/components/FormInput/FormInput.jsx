import { useState } from "react";

function FormInput({ onChange, label, errorMessage, ...input }) {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="text-field">
        <label>{label}</label>
        <input
          onChange={onChange}
          {...input}
          onBlur={handleFocus}
          onFocus={() => input.name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <span className="error__msg">{errorMessage}</span>
      </div>
    </>
  );
}

export default FormInput;
