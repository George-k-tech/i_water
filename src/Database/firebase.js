
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuCsRTjli6RxllS1eLP2SVEY6xYckRLUQ",
  authDomain: "i-water-6d943.firebaseapp.com",
  databaseURL: "https://i-water-6d943-default-rtdb.firebaseio.com",
  projectId: "i-water-6d943",
  storageBucket: "i-water-6d943.appspot.com",
  messagingSenderId: "415392190333",
  appId: "1:415392190333:web:4981729ca3f8b2d21ec614",
  measurementId: "G-811LML4G56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}