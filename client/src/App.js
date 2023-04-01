import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './Components/Login';
import SignUpForm from './Components/SignUp';
function App() {
  return (
    <BrowserRouter className="App">
    
      <SignUpForm/>
    </BrowserRouter>
  );
}
export default App;