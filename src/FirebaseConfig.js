import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBi2ygRmslOxAC5_Iv96-OQyJ3CCHxeTpU",
  authDomain: "reactwithfirebasecrud.firebaseapp.com",
  projectId: "reactwithfirebasecrud",
  storageBucket: "reactwithfirebasecrud.appspot.com",
  messagingSenderId: "103066307614",
  appId: "1:103066307614:web:cdf7e23af319a5a28d320f",
  measurementId: "G-C7WWLGFDZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth();
export {db, auth};