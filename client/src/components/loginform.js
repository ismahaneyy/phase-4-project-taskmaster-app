import { useState } from "react";
import "../styles/form.css";
import "../styles/Login.css";
import { NavLink, Redirect } from "react-router-dom";

function Loginform() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  // Toggling password visibility


  const password_input_type = isVisible ? "text" : "password";
  const visibility_icon = isVisible ? "visibility_off" : "visibility";

  let togglePasswordVisibility = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };


  // input states


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleEmailInput = (email) => {
    setEmail(email);
  };

  let handlePasswordInput = (password) => {
    setPassword(password);
  };


  // handle logging in a user


  let handleLogin = () => {
    let userObj = {
      email,
      password,
    };

    console.log(userObj);

    fetch("https://phase-4-project-taskmaster-app.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    }).then((response) => {
      console.log(response);

      if (response.ok) {
        setAuthenticated(true);
        return response.json().then((data) => {
          console.log(data);
          let token = data.token;
          localStorage.setItem('jwt', token.toString());
        });
      } else if (!response.ok) {
        return response.json().then((error) => {
          let errorMessage = error.error;
          document.getElementById("login-error-container").innerHTML =
            errorMessage;
        });
      }
    });
  };


  // if successfully registered redirect to login page


  if(authenticated){
    return <Redirect to="/dashboard" />
  }


  // REMOVE ERROR MESSAGE


  let removeErrorMessage = (id) => {
    document.getElementById("login-error-container").innerHTML = "";
  };

  
  return ( 

    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Task Master</h1>
      </nav>
      
    <div class="login">
    <div></div>
    <h2>Login</h2>
    <br></br>
    <br></br>
    <form className="login-form">
      <div className="textbox">
        <input type="email" placeholder="Email"  
       onChange={(event) =>{
        removeErrorMessage("login-error-container");
        handleEmailInput(event.target.value)}} value={email}/>
        <span className="material-symbols-outlined"> account_circle </span>
      </div>
      <div className="textbox">
        <input type={password_input_type} placeholder="Password"  value={password}
          onChange={(event) => {
            removeErrorMessage("login-error-container");
            handlePasswordInput(event.target.value)
            }}/>
             <i
             id="visibility-icons"
              onClick={() => {
                togglePasswordVisibility();
              }}
              className="material-icons"
            >
              {visibility_icon}
            </i>
        <span className="material-symbols-outlined"> lock </span>
      </div>

     <NavLink className="navigationLink" to="/passwordresetemail">
       <h4 className="forgot-msg">Forgot your password?</h4>
     </NavLink>
      <button onClick={(e)=>{
        e.preventDefault();
        handleLogin()}
        } type="submit">LOGIN</button>
     <h4 className="redirect-msg">
       Not a member?
       <NavLink className="span" to="/signup">
         <span>Sign up today</span>
       </NavLink>
     </h4>
     <div className="error-msg-login-container">
          <h6 id="login-error-container"></h6>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Loginform;
