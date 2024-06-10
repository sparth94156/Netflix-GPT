// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshdfzpcCwn8PQZirKOx-FczcXmiYRAhQ",
  authDomain: "netflixgpt-ad6a8.firebaseapp.com",
  projectId: "netflixgpt-ad6a8",
  storageBucket: "netflixgpt-ad6a8.appspot.com",
  messagingSenderId: "287330004480",
  appId: "1:287330004480:web:5a02ec1e1c19cd9b5f72e5",
  measurementId: "G-PZKZNT1373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
