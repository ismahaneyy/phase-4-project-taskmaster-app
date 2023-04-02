import "../styles/form.css";
import { useState } from "react";
import "../styles/Login.css";
import { NavLink, Redirect } from "react-router-dom";

function Signup() {

  const token = localStorage.getItem("jwt");  //store token in localStorage

  // toggling password visibility

  const [isVisible, setIsVisible] = useState(false);

  const password_input_type = isVisible ? "text" : "password";
  const visibility_icon = isVisible ? "visibility_off" : "visibility";

  let togglePasswordVisibility = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  const password_confirmation_input_type = isPasswordConfirmationVisible
    ? "text"
    : "password";
  const password_confirmation_visibility_icon = isPasswordConfirmationVisible
    ? "visibility_off"
    : "visibility";

  let togglePasswordConfirmationVisibility = () => {
    if (isPasswordConfirmationVisible) {
      setIsPasswordConfirmationVisible(false);
    } else {
      setIsPasswordConfirmationVisible(true);
    }
  };

  const[isSignedUp, setIsSignedUp] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async () => {

    const data = {
      email: email,  
      name: username,
      password: password,
    };

    console.log(data);

    if(email !== "" && password !== "" && confirmpassword !== ""){
    if(password === confirmpassword){    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(response.json())
        setIsSignedUp(true)
        alert("Success");
        console.log("You have successfully created a new account!");
      } else {
        console.log(response.json())
        alert("Failed to create a new account");
        console.log("Sign up failed.");
      }
    } catch (error) {
      alert(error.message)
      console.log(error);
    }}
    else{
      alert("password must match")
    }}
    else{
      alert("Kindly fill in all fields");
    }
  };

  if(isSignedUp){
    return <Redirect exact to = "/" />;
  }

  return (
      <div className="login">
        <div></div>
        <h2>Sign up</h2>
        <br></br>
        <br></br>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
          <div className="textbox">
            <input
              type={password_input_type}
              placeholder="Password"
              value={password}
              minLength = "6"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <i onClick={()=>{
              togglePasswordVisibility();
            }} id="visibility-icons" className="material-icons">{visibility_icon}</i>
            <span className="material-symbols-outlined"> lock </span>
          </div>
          <div className="textbox">
            <input
              type={password_confirmation_input_type}
              placeholder="Confirm Password"
              onChange={(event) => setConfirmpassword(event.target.value)}
              required
            />
            <i onClick={()=>{
              togglePasswordConfirmationVisibility()
            }} id="visibility-icons" className="material-icons">{password_confirmation_visibility_icon}</i>
            <span className="material-symbols-outlined"> lock </span>
          </div>
          <button type="submit" onClick={(e)=>{
            e.preventDefault();
            handleSubmit()}} >SIGN UP</button>
          <h4>Already have an account?
          &nbsp;
            <NavLink exact to="/">
              Login
            </NavLink>
          </h4>
        </form>
      </div>
  );
}

export default Signup;
