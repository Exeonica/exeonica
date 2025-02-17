import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsIfaWWpI8OCwHM3157s6sJH2S61s4_Lc",
  authDomain: "exeonica.firebaseapp.com",
  projectId: "exeonica",
  storageBucket: "exeonica.firebasestorage.app",
  messagingSenderId: "795800386037",
  appId: "1:795800386037:web:c5e7cb17c9f4b2d74648bc",
  measurementId: "G-3XDDZCSQ9E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
