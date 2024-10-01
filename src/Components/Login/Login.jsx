import { useState, useRef } from "react";
import "./Login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  //   const [enteredValue, setEnteredValue] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   function handleInputChange(identifier, value) {
  //     setEnteredValue((prev) => ({
  //       ...prev,
  //       [identifier]: value,
  //     }));
  //   }

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log(email.current.value, password.current.value);
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={(event) => handleInputChange("email", event.target.value)}
            // value={enteredValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={(event) => handleInputChange("password", event.target.value)}
            // value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
