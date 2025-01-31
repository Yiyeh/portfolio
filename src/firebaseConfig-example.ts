import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "EXAMPLE_API_KEY",
  authDomain: "example.firebaseapp.com",
  projectId: "example-project-id",
  storageBucket: "example.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:exampleappid",
  measurementId: "G-EXAMPLEMEASUREID"
};

export const adminUID = "123456789abcdefghijklmnop"; // Reemplaza con tu UID de Firebase Auth

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
