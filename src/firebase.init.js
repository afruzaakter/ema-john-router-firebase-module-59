// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7OFGyW_e7l15Oc8AOSKFcMWEb60CAQBU",
  authDomain: "ema-john-simple-2d056.firebaseapp.com",
  projectId: "ema-john-simple-2d056",
  storageBucket: "ema-john-simple-2d056.appspot.com",
  messagingSenderId: "911751646096",
  appId: "1:911751646096:web:d92b0be3057bbac8858115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

