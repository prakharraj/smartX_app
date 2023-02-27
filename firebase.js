// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAyxiAZbA1772ll-RcoPfH3z1TixTh-r60",
  authDomain: "smartx-auth.firebaseapp.com",
  projectId: "smartx-auth",
  storageBucket: "smartx-auth.appspot.com",
  messagingSenderId: "299386700695",
  appId: "1:299386700695:web:716879ae2c41fc01debad2",
  measurementId: "G-T6JBPN8VMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
