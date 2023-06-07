// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIwWTpmRhNwoh6LZab3-BITi5iZlPkCY4",
  authDomain: "summer-camp-client-9bb2c.firebaseapp.com",
  projectId: "summer-camp-client-9bb2c",
  storageBucket: "summer-camp-client-9bb2c.appspot.com",
  messagingSenderId: "736893547",
  appId: "1:736893547:web:4f114fcad9fb2928b9ef2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;