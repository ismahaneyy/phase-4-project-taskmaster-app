import { useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/resetpasswordform.css";

function EmailEntryForm() {


  // Email states


  let[userEmail, seUserEmail] = useState("")
  let[isLoading,setIsLoading] = useState(false)
  let[emailSuccess, setEmailSuccess] = useState(false)


  // Update userEmail state when user types


  let handleUserEmailChange = (value) => {
    seUserEmail(value)
  };


  //  Handle sending email to the user through the email provided ;


  let sendEmail = () => {
    setIsLoading(true)
    let obj = { email: userEmail}
    fetch(`http://localhost:3000/password_reset/new`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        setIsLoading(false)
        setEmailSuccess(true)
        alert('Success');
      } else if (!response.ok) {
        setIsLoading(false)
        alert('Error');
      }
    });
  };


  // If email is successfully sent redirect to password reset form


  if(emailSuccess){
    return <Redirect to="/passwordresettoken" />
  }


  return (
    <main className="reset-form-container">
      <form className="active" id="email-entry">
        <h1 className="form-title">Forgot Password ?</h1>
        <p>
          That's okay, it happens! Enter your email to receive a secret token to
          set a new password
        </p>
        <div className="form-group">
          <input onChange={(e)=>{
            handleUserEmailChange(e.target.value)
          }} type="email" className="form-input" placeholder="..." />
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
        </div>
        <br />
        <br />
        {/* <NavLink className="navlink" to="/passwordresettoken"> */}
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            localStorage.setItem('email', userEmail.toString())
            sendEmail()
          }} className="form-button">
            Confirm Email
            {isLoading &&
              <div id="button-loader">
                <div></div>
              </div>}
          </button>
        {/* </NavLink> */}
      </form>
    </main>
  );
}

export default EmailEntryForm;
