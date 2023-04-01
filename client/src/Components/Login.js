import React, { useState } from "react";
import "../Stylesheets/Login.css";



function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Login successful!");
      } else {
        console.log("Login failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div class="login">
<div></div>
<h2>Login</h2>
<br></br>
<br></br>
<form className="login-form"  onSubmit={handleSubmit}>
  <div className="textbox">
    <input type="email" placeholder="Username"  value={username}
            onChange={(event) => setUsername(event.target.value)} />
    <span className="material-symbols-outlined"> account_circle </span>
  </div>
  <div className="textbox">
    <input type="password" placeholder="Password"  value={password}
            onChange={(event) => setPassword(event.target.value)}/>
    <span className="material-symbols-outlined"> lock </span>
  </div>
  <button type="submit">LOGIN</button>
  <a href="https://website.com">Forgot your credentials?</a>
</form>
</div>
  );
}
export default LoginForm;

