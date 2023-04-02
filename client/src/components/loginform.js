import { useState } from "react";
import "../styles/form.css";
import { NavLink, Redirect } from "react-router-dom";

function Loginform() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
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


  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleNameInput = (name) => {
    setName(name);
  };

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

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    }).then((response) => {
      console.log(response);

      if (response.ok) {
        setIsLoggedin(false);
        setAuthenticated(true);
        return response.json().then((data) => {
          console.log(data);
          let token = data.token;
          localStorage.setItem('jwt', token.toString());
        });
      } else if (!response.ok) {
        console.log(response);
        setIsLoggedin(false);
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
    <main className="form-container">
      <form>
        <h1 className="form-title">Login .</h1>
        <div className="form-group">
          <input
            onChange={(e) => {
              removeErrorMessage("elogin-error-container");
              handleEmailInput(e.target.value);
            }}
            type="email"
            className="form-input"
            placeholder="..."
            value={email}
            autoComplete="false"
            required
          />
          <label className="form-label">
            <span className="content-name">Email</span>
          </label>
          <div className="verification-icon">
            <i id="valid-icon" className="material-icons">
              done
            </i>
            <i id="invalid-icon" className="material-icons">
              close
            </i>
          </div>
          <div className="error-msg-container">
            <h6 id="email-error-container"></h6>
          </div>
        </div>
        <div className="form-group">
          <input
            onChange={(e) => {
              removeErrorMessage("passlogin-error-container");
              handlePasswordInput(e.target.value);
            }}
            type={password_input_type}
            className="form-input"
            placeholder="..."
            required
          />
          <label className="form-label">
            <span className="content-name">Password</span>
          </label>
          <div className="visibility-icon">
            <i
              onClick={() => {
                togglePasswordVisibility();
              }}
              className="material-icons"
            >
              {visibility_icon}
            </i>
          </div>
          <div className="error-msg-container">
            <h6 id="login-error-container"></h6>
          </div>
        </div>
        <NavLink className="navigationLink" to="/passwordresetemail">
          <h4 className="forgot-msg">Forgot your password?</h4>
        </NavLink>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="form-button"
        >
          Login
        </button>
        <h4 className="redirect-msg">
          Not a member?
          <NavLink className="span" to="/signup">
            <span>Sign up today</span>
          </NavLink>
        </h4>
      </form>
    </main>
  );
}

export default Loginform;
