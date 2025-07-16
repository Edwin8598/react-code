import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Fire";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import "./DashboardPage.css";

function DashboardPage() {
  const [user] = useAuthState(auth);
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState("inicio");

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que deseas cerrar tu sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#c0392b",
      cancelButtonColor: "#3498db",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await signOut(auth);
        await Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/";
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cerrar sesión. Intenta de nuevo.",
        });
      }
    }
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const renderView = () => {
    switch (view) {
      case "inicio":
        return <h1 className="title">Bienvenido a la Página</h1>;
      case "ajustes":
        return (
          <div>
            <h2 className="title">Ajustes</h2>
            <p>Puedes modificar la configuración aquí.</p>
            <ul>
              <li>🔔 Notificaciones</li>
              <li>🌙 Apariencia</li>
              <li>🔒 Seguridad</li>
            </ul>
          </div>
        );
      case "perfil":
        return (
          <div>
            <h2 className="title">Perfil de Usuario</h2>
            {user ? (
              <div className="profile-info">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>ID:</strong> {user.uid}</p>
              </div>
            ) : (
              <p>No hay usuario logueado</p>
            )}
          </div>
        );
      default:
        return <h1 className="title">Bienvenido</h1>;
    }
  };

  return (
    <div className={`dashboard-page ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        <div className="logo">PÁGINA</div>
        <div className="nav-links">
          <button className={`link ${view === "inicio" ? "active" : ""}`} onClick={() => setView("inicio")}>Inicio</button>
          <button className={`link ${view === "ajustes" ? "active" : ""}`} onClick={() => setView("ajustes")}>Ajustes</button>
          <button className={`link ${view === "perfil" ? "active" : ""}`} onClick={() => setView("perfil")}>Perfil</button>
          {user && <span className="user-email">{user.email}</span>}
          <button className="mode-toggle" onClick={toggleMode}>
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
              <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <div className="box">
        {renderView()}
      </div>
    </div>
  );
}

export default DashboardPage;









