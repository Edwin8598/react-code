import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Fire";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import "./DashboardPage.css";

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

  const toggleMode = () => setDarkMode(!darkMode);

  const renderView = () => {
    switch (view) {
      case "inicio":
        return (
          <div className={`inicio-container ${darkMode ? "inicio-dark" : ""}`}>
            <h1 className="inicio-titulo">¡Bienvenido a la Página!</h1>
            <p className="inicio-texto">
              Nos alegra tenerte aquí. Explora y disfruta de todas las funciones disponibles.
            </p>
          </div>
        );
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
        <div className="navbar-left">
          <div className="logo">🛒 ICO</div>
          <input type="text" className="search-bar" placeholder="Buscar productos..." />
        </div>

        <div className="navbar-center">
          <button className="highlight-button pink">❤️ Favoritos</button>
          <button className="highlight-button green">🛍️ Mis Compras</button>
          <button className="highlight-button purple">🚀 Envío Gratis</button>
        </div>

        <div className="navbar-right">
          <button className="mode-toggle" onClick={toggleMode}>
            {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
          <button className="highlight-button white" onClick={() => setView("inicio")}>🏠 Inicio</button>
          <button className="highlight-button white" onClick={() => setView("ajustes")}>⚙️ Ajustes</button>
          <button className="highlight-button white" onClick={() => setView("perfil")}>👤 Perfil</button>
          <Link to="/usuarios" className="highlight-button white">👥 Usuarios</Link>
          <button className="user-menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          {menuOpen && (
            <div className="user-dropdown">
              <span>{user?.email}</span>
              <button className="logout-dropdown" onClick={handleLogout}>Cerrar sesión</button>
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










