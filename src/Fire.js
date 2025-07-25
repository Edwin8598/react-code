// src/Fire.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ Reemplaza con tus datos reales de Firebase
const firebaseConfig = {
 apiKey: "AIzaSyCehVIP30axLA9L_oIYuXkSPeInX3yAPc4",
  authDomain: "proyecto-react-5cda9.firebaseapp.com",
  projectId: "proyecto-react-5cda9",
  storageBucket: "proyecto-react-5cda9.firebasestorage.app",
  messagingSenderId: "581118755881",
  appId: "1:581118755881:web:76ad5c75000e34ffc40838"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// Exports consolidados
export { auth, googleProvider, signInWithPopup, signOut, db };

