import "../styles/resetpasswordform.css";
import { Redirect } from "react-router-dom";
import { useState } from "react";

function TokenEntryForm() {

  // New password entry parameters/ state handling;

  let [newPassword, setNewPassword] = useState("");
  let [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  let handlePassword = (value) => {
    setNewPassword(value);
  };

  let handlePasswordConfirm = (value) => {
    setNewPasswordConfirm(value);
  };


  // Token States;


  let [token, setToken] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [tokenSuccess, setTokenSuccess] = useState(false);

  let handleToken = (value) => {
    setToken(value);
  };

  // Retrieve email value from local storage;

  let email = localStorage.getItem("email");


  // Handle reset password;


  let sendToken = () => {
    setIsLoading(true);
    let obj = { 
      email,
      password_reset_token: token,
      password: newPassword
    };
    if(newPassword === newPasswordConfirm){
    fetch(`http://localhost:3000/password_reset/create`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        setIsLoading(false);
        setTokenSuccess(true);
        localStorage.removeItem("email");
        alert("Success");
      } else if (!response.ok) {
        setIsLoading(false);
        alert("Error");
      }
    });}
    else{
      alert("password must match");
    }
  };


  // Password input fields visibility


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


  // if password is successfully reset redirect to login page;


  if (tokenSuccess) {
    return <Redirect exact to="/" />;
  }

  return (
    <main className="reset-form-container">
      <form id="token-entry">
        <h1 className="form-title">Verify email address</h1>
        <p>
          Verification code sent to <span>{email}</span>
        </p>

        <div className="form-group">
          <input
            onChange={(e) => {
              handleToken(e.target.value);
            }}
            type="text"
            className="form-input"
            value={token}
            placeholder="..."
            required
          />
          <label className="form-label">
            <span className="content-name">Token</span>
          </label>
          <div className="verification-icon">
            <i id="valid-icon" className="material-icons">
              done
            </i>
            <i id="invalid-icon" className="material-icons">
              close
            </i>
          </div>
        </div>

        <div className="form-group">
          <input
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
            type={password_confirmation_input_type}
            className="form-input"
            value={newPassword}
            placeholder="..."
            required
          />
          <label className="form-label">
            <span className="content-name">Password</span>
          </label>
          <div className="visibility-icon">
            <i
              onClick={() => {
                togglePasswordConfirmationVisibility();
              }}
              className="material-icons"
            >
              {password_confirmation_visibility_icon}
            </i>
          </div>
        </div>

        <div className="form-group">
          <input
            onChange={(e) => {
              handlePasswordConfirm(e.target.value);
            }}
            type={password_input_type}
            className="form-input"
            value={newPasswordConfirm}
            placeholder="..."
            required
          />
          <label className="form-label">
            <span className="content-name">Confirm password</span>
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
        </div>
        <br />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            sendToken();
          }}
          className="form-button"
        >
          Confirm Token
          {isLoading && (
            <div id="button-loader">
              <div></div>
            </div>
          )}
        </button>
      </form>
    </main>
  );
}

export default TokenEntryForm;
