import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHIWz1ZK-EoFXxXlle9xIpdYx51OWNAmM",
  authDomain: "exeonic-6e5e5.firebaseapp.com",
  projectId: "exeonic-6e5e5",
  storageBucket: "exeonic-6e5e5.appspot.com",
  messagingSenderId: "353455895132",
  appId: "1:353455895132:web:8c58c6d484895647daec99",
  measurementId: "G-XXN3V6YKFB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
