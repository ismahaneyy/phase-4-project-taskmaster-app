import React from "react";

function Landingpage() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Task Master</h1>
       
      </nav>
      <div className="landing-page">
        <h2>Welcome to Task Master</h2>
        <p>Manage your tasks with ease using our powerful task management tool. </p>

       

        <div className="nav-buttons">
          <button className="signin-button">Sign In</button>
       
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="bottom-container">
        <div className="middle-container">
          <h2>Time</h2>
          <p>We help you manage your time efficiently by providing a clear overview of your daily tasks and schedule.</p>
        </div>
        <div className="right-container">
          <h2>Goals</h2>
          <p>Set and track your personal and professional goals, ensuring that you stay focused and motivated towards achieving them.</p>
        </div>
        <div className="about-us-container">
          <div className="about-us">
            <h2>You're the Boss</h2>
            <p>We empower you to take charge of your life and prioritize your tasks according to your needs and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
