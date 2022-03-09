import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAo17u9VPGx6jSGT4fhWnZgMwmTNMx7FDo",
//   authDomain: "liabraryproject.firebaseapp.com",
//   projectId: "liabraryproject",
//   storageBucket: "liabraryproject.appspot.com",
//   messagingSenderId: "9334971713",
//   appId: "1:9334971713:web:b85d1228993d6a9ed695c0",
//   measurementId: "G-V0841HHFQS"
// };
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
export {db}