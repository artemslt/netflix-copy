// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRoQRSLVUXsllxCaoH3lR2Nhqo_k4ss88",
  authDomain: "neflix-react-tw.firebaseapp.com",
  projectId: "neflix-react-tw",
  storageBucket: "neflix-react-tw.appspot.com",
  messagingSenderId: "542052930435",
  appId: "1:542052930435:web:16076d3cc0fbc2023f9cb6",
  measurementId: "G-CP01SZH0MG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
