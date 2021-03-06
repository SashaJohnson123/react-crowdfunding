import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response.token);
        if (!response.token) {
          console.error("Unabled to fetch token");
          return;
        }
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("userName", credentials.username);
        history.push("/");
      });
    }
  };
  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
          value={credentials.username}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={credentials.email}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={credentials.password}
        ></input>
      </div>
      <button type="Submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
