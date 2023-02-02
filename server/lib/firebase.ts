// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeGZzvcHc_qyxz-oKFAMnzGTDCDPGjoPw",
  authDomain: "web-programlama-4c239.firebaseapp.com",
  projectId: "web-programlama-4c239",
  storageBucket: "web-programlama-4c239.appspot.com",
  messagingSenderId: "438132291322",
  appId: "1:438132291322:web:cf49f9442fcf2ba2463b43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(firebaseApp);