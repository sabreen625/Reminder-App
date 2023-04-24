import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxWPC0Sr3axnKnjoWwbIuQtUnG7FH6k3c",
    authDomain: "reminder-6c589.firebaseapp.com",
    projectId: "reminder-6c589",
    storageBucket: "reminder-6c589.appspot.com",
    messagingSenderId: "328434076020",
    appId: "1:328434076020:web:ae4eee1ed82abb7b8bc421"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();
  
  

