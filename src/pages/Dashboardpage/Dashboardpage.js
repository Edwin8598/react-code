import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Fire";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Dashboardpage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que deseas cerrar tu sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#109edfff",
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
        navigate("/");
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

  const styles = {
    page: {
      height: "100vh",
      backgroundColor: "#ede7f6",
      fontFamily: "'Georgia', serif",
      position: "relative",
    },
    navbar: {
      backgroundColor: "#8ee5f0ff", // color naranja fuerte
      padding: "10px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
    },
    logo: {
      fontWeight: "bold",
      fontSize: "20px",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "400",
    },
    activeLink: {
      fontWeight: "bold",
      textDecoration: "underline",
    },
    box: {
      backgroundColor: "#aeb8c6",
      padding: "40px 60px",
      border: "2px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    title: {
      fontSize: "32px",
      color: "#333333",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar estilo clásico */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>PAGINA</div>
        <div style={styles.navLinks}>
          <a href="#" style={{ ...styles.link, ...styles.activeLink }}>
            Inicio
          </a>
          <a href="#" style={styles.link}>
            Ajustes
          </a>
          <a href="#" style={styles.link}>
            Perfil
          </a>
         <button
  onClick={handleLogout}
  style={{
    backgroundColor: "#ff0000",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "6px 10px",
    fontSize: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
    />
    <path
      fillRule="evenodd"
      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
    />
  </svg>
  Cerrar Sesión
</button>



        </div>
      </nav>

      {/* Caja central */}
      <div style={styles.box}>
        <h1 style={styles.title}>Bienvenido a la Página</h1>
      </div>
    </div>
  );
}

export default Dashboardpage;






