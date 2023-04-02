import "../styles/resetpasswordform.css";
import { useState } from "react";


function NewPassWordEntry() {

        // Toggling passwords visibility

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
    <main className="reset-form-container">
      <form className="inactive" id="new-pass-entry">
      <h1 className="form-title">New Password</h1>
        <p>
            Please enter your new password
        </p>

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
         <br/>
         <br/>
            <button onClick={(e) => {}} className="form-button">
                Confirm Password
            </button>
      </form>
    </main>
  );
}

export default NewPassWordEntry;
