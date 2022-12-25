// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5YauizPccUhcYum1wUyTt7dxxiHFvNrY",
  authDomain: "antiproxy-7bb3f.firebaseapp.com",
  projectId: "antiproxy-7bb3f",
  storageBucket: "antiproxy-7bb3f.appspot.com",
  messagingSenderId: "250406076004",
  appId: "1:250406076004:web:0f281c652f5ae3e1e2e971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/",
  // This must be true.
  handleCodeInApp: true,
};
const db = getFirestore(app);
export { app, actionCodeSettings, db };
