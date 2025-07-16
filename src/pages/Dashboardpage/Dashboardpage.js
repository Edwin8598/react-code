import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Fire";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import "./DashboardPage.css";
import { Link } from "react-router-dom";


function DashboardPage() {
  const [user] = useAuthState(auth);
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

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
        return <div style={{ textAlign: "center", padding: "2rem" }}>
          
        </div>;
      case "ajustes":
        return (
          <div>
            <h2 className="title">Ajustes</h2>
            <p>Puedes modificar la configuración aquí.</p>
            <ul>
              <li>🔔 Notificaciones</li>
              <li>🌙 Apariencia</li>
              <li>🔒 Seguridad</li>
              <li>🔒 Usuarios</li>
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
         <Link to="/usuarios" className={`link ${view === "usuarios" ? "active" : ""}`}>
  Usuarios
</Link>
          <button className="mode-toggle" onClick={toggleMode}>
            {darkMode ? "Modo Claro" : "Modo Oscuro"}
          </button>
        </div>

        {/* Botón redondo y menú desplegable */}
        <div className="user-menu-container">
          <button className="user-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          {menuOpen && (
            <div className="user-dropdown">
              <span>{user?.email}</span>
              <button className="logout-dropdown" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="box">
        {renderView()}
      </div>
    </div>
  );
}

export default DashboardPage;









