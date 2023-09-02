import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB9uiVJrieJjxqyqNaRU5ejgyuZVujoJUk",
    authDomain: "assign-875fa.firebaseapp.com",
    projectId: "assign-875fa",
    storageBucket: "assign-875fa.appspot.com",
    messagingSenderId: "246383270541",
    appId: "1:246383270541:web:d6832cde2b427828bce0c4",
    measurementId: "G-N06F1HMT7J"
  };



  const app = initializeApp(firebaseConfig);

  export const auth  = getAuth(app)
