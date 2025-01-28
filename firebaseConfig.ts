import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk2ZtHOt4NO0q2Nj_frxW-losWtUNmcK8",
  authDomain: "yiyehdev-2382c.firebaseapp.com",
  projectId: "yiyehdev-2382c",
  storageBucket: "yiyehdev-2382c.firebasestorage.app",
  messagingSenderId: "1077194174600",
  appId: "1:1077194174600:web:9c018909251e594a20af3d",
  measurementId: "G-ETG91EF9HC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
