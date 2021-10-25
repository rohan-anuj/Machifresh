// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEux089LQp80PpirWB-YY4De0mKUti1G4",
  authDomain: "machifresh-18abf.firebaseapp.com",
  projectId: "machifresh-18abf",
  storageBucket: "machifresh-18abf.appspot.com",
  messagingSenderId: "174087608956",
  appId: "1:174087608956:web:52714b04806cb8aa1707f9",
  measurementId: "G-MDMW7XG1XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);