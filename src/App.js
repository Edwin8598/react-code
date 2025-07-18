// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import { initializeApp } from "firebase/app";*/
// Páginas principales
import LoginPage from "./pages/LoginPages/LoginPages";
import RegisterPage from "./pages/Registerpage/Registerpage";
import ForgotPasswordPage from "./pages/Forgotpasswordpage/Forgotpasswordpage";
import DashboardPage from "./pages/Dashboardpage/Dashboardpage";

// Páginas de prueba con hooks
import UseStatePlay from "./pages/Playground/useState";
import UseEffectPlay from "./pages/Playground/useEffect";
import UseRefPlay from "./pages/Playground/useRef";

// Página de error 404
import NotFoundPage from "./pages/components/NotFoundPage";

// Ruta protegida con Firebase Auth
import ProtectedRoute from "./pages/components/ProtectedRoute";
import AuxiliaresPage from "./pages/AuxiliaresPage/AuxiliaresPage"; 
import Resetpasswordpages from "./pages/Resetpasswordpage/Resetpasswordpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />

        <Route path="/" element={<DashboardPage />} />
        <Route path="/usuarios" element={<AuxiliaresPage />} /> {/* ← Ruta hacia Auxiliares */}
        
        
      

        {/* Ruta protegida */}
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}/>
        <Route path="/auxiliares" element={<ProtectedRoute><AuxiliaresPage /></ProtectedRoute>}/>
        <Route path="/reset" element={<Resetpasswordpages />} />
        {/* Rutas de práctica de hooks */}
        <Route path="/usestate" element={<UseStatePlay />} />
        <Route path="/useeffect" element={<UseEffectPlay />} />
        <Route path="/useref" element={<UseRefPlay />} />

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />
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

