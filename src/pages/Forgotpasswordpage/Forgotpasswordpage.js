import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Forgotpasswordpage.css';
// import logo from '../../assets/brilla.png';
import { auth } from '../../Fire';
import { sendPasswordResetEmail } from 'firebase/auth';

function Forgotpasswordpage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Swal.fire("Campo vacío", "Por favor ingresa tu correo.", "warning");
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(email)) {
      Swal.fire("Correo inválido", "Por favor escribe un correo válido.", "error");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        title: "¡Revisa tu correo!",
        html: `Te hemos enviado instrucciones para recuperar tu contraseña. <br><strong>¡Podría estar en SPAM!</strong>`,
        icon: "success",
        timer: 5000,
        showConfirmButton: false
      });
      setEmail('');
    } catch (error) {
      console.error("Error Firebase:", error.code, error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
       
        <h2 className="forgot-title">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="recoverEmail" className="forgot-label">
            Ingresa tu correo electrónico
          </label>
          <input
            type="email"
            id="recoverEmail"
            className="forgot-input"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-button">
            Enviar instrucciones
          </button>
          <button
            type="button"
            className="forgot-back-button"
            onClick={handleGoBack}
          >
            Volver al inicio de sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpasswordpage;


