// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx2SM5keFCoohAd634cvQPo8I7GogNfrk",
  authDomain: "sparta-react-basic-94729.firebaseapp.com",
  projectId: "sparta-react-basic-94729",
  storageBucket: "sparta-react-basic-94729.appspot.com",
  messagingSenderId: "528248218614",
  appId: "1:528248218614:web:da8d945f58701e84c89dd7",
  measurementId: "G-J19TQHBTEL",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
