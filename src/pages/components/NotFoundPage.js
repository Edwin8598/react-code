import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const styles = {
    page: {
      height: "100vh",
      background: `url('/3409297.jpg') no-repeat center center fixed`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Georgia', serif",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      border: "1px solid #000",
      borderRadius: "10px",
      padding: "40px",
      maxWidth: "450px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    },
    heading: {
      fontSize: "48px",
      color: "#b30000",
      marginBottom: "20px",
    },
    message: {
      fontSize: "16px",
      color: "#333",
      marginBottom: "30px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.message}>
          ¡Ups! La página que buscas no existe o fue movida.
        </p>
        <Link to="/" style={styles.button}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
