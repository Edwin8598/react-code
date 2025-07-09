import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from "./pages/Registerpage/Registerpage";
import Forgotpasswordpage from "./pages/Forgotpasswordpage/Forgotpasswordpage";
import LoginPage from "./pages/LoginPages/LoginPages";
import Dashboardpage from "./pages/Dashboardpage/Dashboardpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/forgot" element={<Forgotpasswordpage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import logo from './logo.svg';
//import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

