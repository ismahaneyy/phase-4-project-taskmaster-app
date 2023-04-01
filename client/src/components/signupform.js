import "../styles/form.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";



function Signup() {


    // toggling password visibility

    const[isVisible, setIsVisible] = useState(false)

    const password_input_type = isVisible ? "text" : "password";
    const visibility_icon = isVisible ? "visibility_off" : "visibility";

    let togglePasswordVisibility = () => {
        if(isVisible){
          setIsVisible(false);
        }
        else{
            setIsVisible(true);
        }
    };


    const[isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] = useState(false)

    const password_confirmation_input_type = isPasswordConfirmationVisible ? "text" : "password";
    const password_confirmation_visibility_icon = isPasswordConfirmationVisible ? "visibility_off" : "visibility";

    let togglePasswordConfirmationVisibility = () => {
        if(isPasswordConfirmationVisible){
          setIsPasswordConfirmationVisible(false);
        }
        else{
            setIsPasswordConfirmationVisible(true);
        }
    };

  return (
    <mai className="form-container">
      <form>
        <h1 className="form-title">Sign up .</h1>

        <div className="form-group">
          <input type="text" className="form-input" placeholder="..." />
          <label className="form-label">
            <span className="content-name">Username</span>
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
                <input type="email" className="form-input" placeholder="..." />
                <label className="form-label">
                    <span className="content-name">Email</span>
                </label>
                <div className="verification-icon">
                    <i id="valid-icon" className="material-icons">done</i>
                    <i id="invalid-icon" className="material-icons">close</i>
                </div>
        </div>

        <div className="form-group">
                <input type={password_confirmation_input_type} className="form-input" placeholder="..." />
                <label className="form-label">
                    <span className="content-name">Password</span>
                </label>
                <div className="visibility-icon">
                     <i onClick={()=>{togglePasswordConfirmationVisibility()}} className="material-icons">{password_confirmation_visibility_icon}</i>
                </div>
        </div>

        <div className="form-group">
                <input type={password_input_type} className="form-input" placeholder="..." />
                <label className="form-label">
                    <span className="content-name">Confirm password</span>
                </label>
                <div className="visibility-icon">
                        <i onClick={()=>{togglePasswordVisibility()}} className="material-icons">{visibility_icon}</i>
                </div>
         </div>
         <div className="checkbox-container">
          <input type="checkbox" required />
          <h5>I Agree with privacy and policy</h5>
        </div>
         <button onClick={(e) => {}} className="form-button">
          Sign up
        </button>
         <h4 className="redirect-msg">
          Already have an account?
          <NavLink className="span" exact to="/">
            <span>Sign in</span>
          </NavLink>
        </h4>
      </form>
    </mai>
  );
}

export default Signup;
