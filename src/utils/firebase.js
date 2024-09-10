// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfllMkXjf9xXW3MyH3IBsH9EnMwsw84pM",
  authDomain: "netflixgpt-9a24b.firebaseapp.com",
  projectId: "netflixgpt-9a24b",
  storageBucket: "netflixgpt-9a24b.appspot.com",
  messagingSenderId: "541415659474",
  appId: "1:541415659474:web:334702a08549047edf9a0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
