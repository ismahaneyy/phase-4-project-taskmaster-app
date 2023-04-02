import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Landingpage from '../components/landingpage';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Landingpage/>
    </BrowserRouter>
  );
}

export default App;


