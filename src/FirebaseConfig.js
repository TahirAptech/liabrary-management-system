import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAo17u9VPGx6jSGT4fhWnZgMwmTNMx7FDo",
  authDomain: "liabraryproject.firebaseapp.com",
  projectId: "liabraryproject",
  storageBucket: "liabraryproject.appspot.com",
  messagingSenderId: "9334971713",
  appId: "1:9334971713:web:b85d1228993d6a9ed695c0",
  measurementId: "G-V0841HHFQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
export {db}