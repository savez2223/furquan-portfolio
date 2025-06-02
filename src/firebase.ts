// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your config here 👇
const firebaseConfig = {
  apiKey: "AIzaSyCF6IUHHOg4EsW54hSov8uIkiGWEotiVOU",
  authDomain: "portfolio-data-9fcab.firebaseapp.com",
  projectId: "portfolio-data-9fcab",
  storageBucket: "portfolio-data-9fcab.firebasestorage.app",
  messagingSenderId: "303356655659",
  appId: "1:303356655659:web:b918525a00ed37774e526e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
