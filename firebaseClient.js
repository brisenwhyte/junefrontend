// firebaseClient.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmkVRBBGdXTCpoM492gPknjYePz-0TSwY",
  authDomain: "june-b36a5.firebaseapp.com",
  projectId: "june-b36a5",
  storageBucket: "june-b36a5.firebasestorage.app",
  messagingSenderId: "410523248573",
  appId: "1:410523248573:web:cee534b566660b257a54d4",
  measurementId: "G-RDJMENTC78"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
