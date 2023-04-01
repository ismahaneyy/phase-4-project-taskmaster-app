import React, { useState } from "react";
import "../Stylesheets/Login.css";



function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,  
      username: username,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("You have successfully created a new account!");
      } else {
        console.log("Sign up failed.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div className="login">
<div></div>
<h2>Sign up</h2>
<br></br>
<br></br>
<form className="login-form"  onSubmit={handleSubmit}>
  <div className="textbox">
    <input type="email" placeholder="Email"  value={email}
            onChange={(event) => setEmail(event.target.value)} />
    <span className="material-symbols-outlined"> account_circle </span>
  </div>
  <div className="textbox">
    <input type="text" placeholder="Username"  value={username}
            onChange={(event) => setUsername(event.target.value)} />
    <span className="material-symbols-outlined"> account_circle </span>
  </div>
  <div className="textbox">
    <input type="password" placeholder="Password"  value={password}
            onChange={(event) => setPassword(event.target.value)}/>
    <span className="material-symbols-outlined"> lock </span>
  </div>
  <div className="textbox">
    <input type="password" placeholder="Confirm Password"  
            onChange={(event) => setConfirmpassword(event.target.value)}/>
    <span className="material-symbols-outlined"> lock </span>
  </div>
  <button type="submit">SIGN UP</button>
  <a href="https://website.com">Already have an account?...Login</a>
</form>
</div>
  );
}
export default SignUpForm;

