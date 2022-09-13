// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBi2wPsqth3w0AeJJbEbKSOv22wfI12QFA",
  authDomain: "db-shopee.firebaseapp.com",
  projectId: "db-shopee",
  storageBucket: "db-shopee.appspot.com",
  messagingSenderId: "57089950234",
  appId: "1:57089950234:web:6ac43ca7d85f3170a907a3",

  // apiKey: "AIzaSyDzyr7hnYhgoA8VWR9IXEkU0RKAty-Qb60",
  // authDomain: "shopee-f16e8.firebaseapp.com",
  // projectId: "shopee-f16e8",
  // storageBucket: "shopee-f16e8.appspot.com",
  // messagingSenderId: "637838291953",
  // appId: "1:637838291953:web:755d0e967bcd3b47c04a50",
});

// const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
export {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};


