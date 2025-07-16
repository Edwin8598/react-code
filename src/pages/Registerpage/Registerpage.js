import { useState } from 'react';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../Fire';
import { doc, setDoc } from 'firebase/firestore';
import './Registerpage.css'; // 👉 Importa el CSS

function Registerpage() {
  const [formData, setFormData] = useState({
    cedula: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    sexo: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key] === '') {
        Swal.fire("Campos incompletos", "Por favor llena todos los campos.", "warning");
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Correo inválido", "Escribe un correo válido.", "error");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire("Contraseña", "Las contraseñas no coinciden.", "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'usuarios', user.uid), {
        cedula: formData.cedula,
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        fechaNacimiento: formData.fechaNacimiento,
        sexo: formData.sexo,
        telefono: formData.telefono,
        email: formData.email,
        estado: 'pendiente'
      });

      Swal.fire("¡Registro exitoso!", "Usuario registrado correctamente.", "success").then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire("Error", "Este correo ya está registrado.", "error");
      } else {
        console.error(error);
        Swal.fire("Error", "No se pudo registrar el usuario.", "error");
      }
    }
  };

  return (
    <div className="bg-gradient">
      <div className="form-card">
        <h3 className="text-center">Registro de Usuario</h3>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label className="form-label">Nombres</label>
            <input type="text" className="form-control" name="nombres" value={formData.nombres} onChange={handleChange} placeholder="Tus nombres" />
          </div>

          <div className="form-group">
            <label className="form-label">Apellidos</label>
            <input type="text" className="form-control" name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Tus apellidos" />
          </div>

          <div className="form-group">
            <label className="form-label">Cédula</label>
            <input type="text" className="form-control" name="cedula" value={formData.cedula} onChange={handleChange} placeholder="Tu cédula" />
          </div>

          <div className="form-group">
            <label className="form-label">Fecha de Nacimiento</label>
            <input type="date" className="form-control" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label">Teléfono</label>
            <input type="tel" className="form-control" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ej: 3001234567" />
          </div>

          <div className="form-group">
            <label className="form-label">Sexo</label>
            <div className="radio-group">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sexo" value="Masculino" checked={formData.sexo === 'Masculino'} onChange={handleChange} />
                <label className="form-check-label">Masculino</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sexo" value="Femenino" checked={formData.sexo === 'Femenino'} onChange={handleChange} />
                <label className="form-check-label">Femenino</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="tucorreo@ejemplo.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Escribe tu contraseña" />
          </div>

          <div className="form-group">
            <label className="form-label">Repetir Contraseña</label>
            <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirma tu contraseña" />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Registrar</button>
            <a href="/" className="btn btn-outline-secondary">Volver al inicio</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;

