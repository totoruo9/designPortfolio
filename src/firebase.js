// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from '@firebase/storage';
import { FIREBASE_APIKEY,FIREBASE_APPID } from "./env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: {FIREBASE_APIKEY},
  authDomain: "jinhyukdesignportfolio.firebaseapp.com",
  projectId: "jinhyukdesignportfolio",
  storageBucket: "jinhyukdesignportfolio.appspot.com",
  messagingSenderId: "913758117731",
  appId: {FIREBASE_APPID},
  measurementId: "G-DXFRKV1HJ8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);