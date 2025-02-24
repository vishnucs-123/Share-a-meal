// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkZBWVoBaTT4Iz0fRtZQHHT26vCSJRF20",
    authDomain: "share-a-meal-f4fd8.firebaseapp.com",
    projectId: "share-a-meal-f4fd8",
    storageBucket: "share-a-meal-f4fd8.firebasestorage.app",
    messagingSenderId: "877696737918",
    appId: "1:877696737918:web:7b25434d261bf92754ee2f",
    measurementId: "G-FXCE1C01VT"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
