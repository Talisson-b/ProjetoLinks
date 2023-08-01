
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBjc2WLCBAJW-Il12XxMfbKU-JLH5gIzm4",
  authDomain: "reactlinks-ca64a.firebaseapp.com",
  projectId: "reactlinks-ca64a",
  storageBucket: "reactlinks-ca64a.appspot.com",
  messagingSenderId: "673738755292",
  appId: "1:673738755292:web:ed840acf67d76f79fcb819"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db}