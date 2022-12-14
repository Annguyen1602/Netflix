// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Js_el3ObLXXuV2UbcDkQwnGVfS7n_ww",
  authDomain: "netflixa-f699e.firebaseapp.com",
  projectId: "netflixa-f699e",
  storageBucket: "netflixa-f699e.appspot.com",
  messagingSenderId: "985474101690",
  appId: "1:681354614072:web:bb27dc2f6b7124b125ddcd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
