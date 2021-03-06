import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const requestBody = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error;
        }
      })
      .then((data) => {
        console.log(data);
        alert(`You logged in as ${data.email}`);
        setUserToSession(data);
      })
      .catch(() => {
        alert("Email or password is invalid");
      });
  };

  const setUserToSession = (data) => {
    localStorage.clear();
    localStorage.setItem("token", data.token);
  };

  return (
    <div id="login" className="authentication-box">
      <h2>Login</h2>
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
        <button className="authentication-button" type="submit" onClick={login}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
