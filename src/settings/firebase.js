// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTM51IUX8N0HnLviTzuBPa8WixMXd9khk",
  authDomain: "test-fyp-281e1.firebaseapp.com",
  projectId: "test-fyp-281e1",
  storageBucket: "test-fyp-281e1.appspot.com",
  messagingSenderId: "112314508764",
  appId: "1:112314508764:web:1501e0b550981ca0bd9b19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000/admin-panel",
  // This must be true.
  handleCodeInApp: true,
};

export { app, actionCodeSettings };
