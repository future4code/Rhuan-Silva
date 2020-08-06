import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../BaseUrl";

// const baseUrl =
//   "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rhuan-Turing";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); 

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BaseUrl}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push('/router')
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input value={email} onChange={onChangeEmail} />
      <input value={password} onChange={onChangePassword} />
      <button onClick={handleLogin}>Fazer Login</button>
    </div>
  );
};

export default LoginPage;
