import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEPTJgjwO1oBYMJg8lUrR3JX9YbKrQLDY",
  authDomain: "clone-25b5b.firebaseapp.com",
  projectId: "clone-25b5b",
  storageBucket: "clone-25b5b.appspot.com",
  messagingSenderId: "140526063357",
  appId: "1:140526063357:web:89cf8b1cb8466590007894",
  measurementId: "G-0GWEP0NZC0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
