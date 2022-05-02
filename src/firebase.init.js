// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHA2Y1CQcrhATS6_bCKQRUUU7SBdA25Gs",
  authDomain: "db-assainment-11-bc594.firebaseapp.com",
  projectId: "db-assainment-11-bc594",
  storageBucket: "db-assainment-11-bc594.appspot.com",
  messagingSenderId: "960387266785",
  appId: "1:960387266785:web:b85722dd41455c693b9fa0",
  measurementId: "G-09J0EWNKM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
