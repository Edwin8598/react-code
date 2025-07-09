import React from "react";

function ForgotPasswordPage() {
  const styles = {
    page: {
      height: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      color: "#000",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "400px",
    },
    title: {
      fontSize: "24px",
      textAlign: "center",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      border: "1px solid #000",
      borderRadius: "5px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    linkContainer: {
      marginTop: "15px",
      textAlign: "center",
    },
    link: {
      color: "#000",
      textDecoration: "none",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recuperar Contraseña</h2>
        <form>
          <label htmlFor="recoverEmail" style={styles.label}>
            Ingresa tu correo electrónico
          </label>
          <input
            type="email"
            id="recoverEmail"
            placeholder="tucorreo@ejemplo.com"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Enviar enlace
          </button>
        </form>
        <div style={styles.linkContainer}>
          <a href="/" style={styles.link}>
            Volver al inicio de sesión
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
