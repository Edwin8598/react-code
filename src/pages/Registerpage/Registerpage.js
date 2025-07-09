import React from "react";

function RegisterPage() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "50px",
      fontFamily: "Arial, sans-serif",
      color: "#000",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "500px",
    },
    title: {
      fontSize: "26px",
      textAlign: "center",
      marginBottom: "25px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #000",
      borderRadius: "5px",
      fontSize: "14px",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #000",
      borderRadius: "5px",
      fontSize: "14px",
      backgroundColor: "#fff",
    },
    buttonRow: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    submitBtn: {
      backgroundColor: "#000",
      color: "#fff",
    },
    backBtn: {
      backgroundColor: "#444",
      color: "#fff",
    },
    helperText: {
      fontSize: "12px",
      marginTop: "-10px",
      marginBottom: "15px",
      color: "#333",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Registro de Usuario</h1>
        <form>
          <label htmlFor="nombre" style={styles.label}>Nombre</label>
          <input type="text" id="nombre" style={styles.input} required />

          <label htmlFor="apellido" style={styles.label}>Apellido</label>
          <input type="text" id="apellido" style={styles.input} required />

          <label htmlFor="fecha" style={styles.label}>Fecha de Nacimiento</label>
          <input type="date" id="fecha" style={styles.input} required />

          <label htmlFor="password" style={styles.label}>Contraseña</label>
          <input type="password" id="password" style={styles.input} required />
          <div style={styles.helperText}>Debe tener entre 8 y 20 caracteres.</div>

          <label htmlFor="repeatPassword" style={styles.label}>Repita la Contraseña</label>
          <input type="password" id="repeatPassword" style={styles.input} required />

          <label htmlFor="email" style={styles.label}>Correo</label>
          <input type="email" id="email" style={styles.input} required />

          <label htmlFor="telefono" style={styles.label}>Teléfono</label>
          <input type="tel" id="telefono" style={styles.input} required />

          <label htmlFor="sexo" style={styles.label}>Sexo</label>
          <select id="sexo" style={styles.select} required>
            <option value="">Seleccione el Sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>

          <label htmlFor="nacionalidad" style={styles.label}>Nacionalidad</label>
          <input type="text" id="nacionalidad" style={styles.input} required />

          <div style={styles.buttonRow}>
            <button type="submit" style={{ ...styles.button, ...styles.submitBtn }}>
              Enviar
            </button>
            <a href="/" style={{ ...styles.button, ...styles.backBtn, textDecoration: "none", textAlign: "center", lineHeight: "28px" }}>
              Volver
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
