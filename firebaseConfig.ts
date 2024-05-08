import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCIJG3tsxeR5erUhjtpRAqSkPDeHdIEzxA",
  authDomain: "fireapp-3ab58.firebaseapp.com",
  projectId: "fireapp-3ab58",
  storageBucket: "fireapp-3ab58.appspot.com",
  messagingSenderId: "405897882766",
  appId: "1:405897882766:web:ca6888716f69c95482addf",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);