// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNNO5r4FY3TDQrrQEu7dJm4iZKEKvFjQ0",
  authDomain: "netflix-with-reactjs-full.firebaseapp.com",
  projectId: "netflix-with-reactjs-full",
  storageBucket: "netflix-with-reactjs-full.appspot.com",
  messagingSenderId: "985474101690",
  appId: "1:985474101690:web:ca2d86e1bfa684a9aead83",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
