
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1N-lD27hS4TXG6dL0JZTwuBFyacsel-Q",
  authDomain: "clone-6f969.firebaseapp.com",
  projectId: "clone-6f969",
  storageBucket: "clone-6f969.firebasestorage.app",
  messagingSenderId: "562330702409",
  appId: "1:562330702409:web:ab6cc0651a8144ede36598",
};

// Initialize Firebase
const app =firebase. initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
