import { useState, useRef } from "react";
import "./Login.css";
import Input from "../Input";
import {isEmail, isNotEmpty,hasMinLength,isEqualsToOtherValue} from "../../Util/Validation";

export default function Login() {
  // const email = useRef();
  // const password = useRef();
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const emailValid = enteredValue.email !== "" && !isEmail(enteredValue.email) && isNotEmpty(enteredValue.email);
  const passwordValid = !hasMinLength(enteredValue.password,6);

  function handleInputChange(identifier, value) {
    setEnteredValue((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // ref={email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
            required
          />
          <div className="control-error">{emailValid && <p> Please Enter Valid Email</p>}</div>
        </div> */}

        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValue.email}
          error={emailValid && 'Please enter Valid email!'}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => handleInputChange("password", event.target.value)}
          value={enteredValue.password}
          error={passwordValid && 'Please enter Valid Password!'}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // ref={password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValue.password}
            required
            minLength={6}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
