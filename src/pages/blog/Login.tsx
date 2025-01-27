// src/pages/Login.tsx
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebaseConfig';

function Login() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Usuario autenticado:", auth.currentUser);
    } catch (error) {
      console.error("Error de autenticación:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
}

export default Login;
