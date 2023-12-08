// import firebase from "firebase";
import { initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJoJ_eMnloG_071C-DMp5u8pyW7DDIDXA",
  authDomain: "oflix-9521f.firebaseapp.com",
  projectId: "oflix-9521f",
  storageBucket: "oflix-9521f.appspot.com",
  messagingSenderId: "767410318970",
  appId: "1:767410318970:web:fba92828e06f50e9b9d5c3",
  measurementId: "G-MY40C5DGJ7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut};
export default db;
