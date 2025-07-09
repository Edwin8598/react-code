import React from "react";

function LoginPage() {
  const styles = {
    page: {
      height: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial, sans-serif",
      color: "#000",
    },
    card: {
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "350px",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
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
    links: {
      marginTop: "15px",
      fontSize: "12px",
    },
    link: {
      display: "block",
      color: "#000",
      textDecoration: "none",
      marginTop: "5px",
    },
    volver: {
      marginTop: "15px",
      fontSize: "12px",
      textDecoration: "underline",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.title}>Bienvenido</div>

        <form>
          <input
            type="text"
            placeholder="Usuario"
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <div style={styles.links}>
          <a href="/forgot" style={styles.link}>¿Perdiste tu contraseña?</a>
          <a href="/register" style={styles.link}>¿No tienes cuenta? Regístrate</a>
           <a href="/contador" style={styles.link}>contador</a>
           <a href="/mensaje" style={styles.link}>mensaje</a>
           <a href="/enfoque" style={styles.link}>Enfoque</a>
        </div>
      </div>

      <div style={styles.volver}>
        Volver
      </div>
    </div>
  );
}

export default LoginPage;

