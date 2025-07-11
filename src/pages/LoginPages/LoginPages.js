import React, { useState } from "react";
import Swal from "sweetalert2";
import { auth, googleProvider, signInWithPopup } from "../../Fire";

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
    googleButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#db4437",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginTop: "10px",
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

  const handleGoogleLogin = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      Swal.fire({
        title: "¡Bienvenido!",
        text: `Sesión iniciada con Google: ${user.email}`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    })
    .then(() => {
      window.location.href = "/dashboard";
    })
    .catch((error) => {
      console.error(error);
      Swal.fire("Error", "No se pudo iniciar sesión con Google.", "error");
    });
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

        <button style={styles.googleButton} onClick={handleGoogleLogin}>
          Iniciar con Google
        </button>

        <div style={styles.links}>
          <a href="/forgot" style={styles.link}>¿Perdiste tu contraseña?</a>
          <a href="/register" style={styles.link}>¿No tienes cuenta? Regístrate</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;



