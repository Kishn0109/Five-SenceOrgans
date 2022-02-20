// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVvmM0_n0o6jKfxcJn4MX3l3iQM3eZG_4",
  authDomain: "five-organs.firebaseapp.com",
  projectId: "five-organs",
  storageBucket: "five-organs.appspot.com",
  messagingSenderId: "741351805580",
  appId: "1:741351805580:web:bf7116efd20ee24698e1a9",
  measurementId: "G-LRN68X11CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
