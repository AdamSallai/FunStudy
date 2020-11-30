import React, { useState} from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const requestBody = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      date: date,
      password: password,
    };

    fetch("http://localhost:8080/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
      });
  };

  return (
    <div id="registration" className="authentication-box">
      <h2>Registration</h2>
      <div className="authentication-textbox">
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          autoComplete="off"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="authentication-button"
          type="submit"
          onClick={register}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
