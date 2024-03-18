

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlXxoxedCFV70p90QuIPGqMrrhSCEVN6E",
  authDomain: "galactus-b1950.firebaseapp.com",
  databaseURL: "https://galactus-b1950-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "galactus-b1950",
  storageBucket: "galactus-b1950.appspot.com",
  messagingSenderId: "233634974275",
  appId: "1:233634974275:web:2b34cc64f50804dedc62f6",
  measurementId: "G-P6PZ1TQD9X"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)
