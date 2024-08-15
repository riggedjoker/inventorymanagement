// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwVfbyPsUcIuOFFKg5owpwf-pxay92DgU",
  authDomain: "inventory-tracker-57555.firebaseapp.com",
  projectId: "inventory-tracker-57555",
  storageBucket: "inventory-tracker-57555.appspot.com",
  messagingSenderId: "1075203454200",
  appId: "1:1075203454200:web:dc01aff5797c78010e370d",
  measurementId: "G-ZSZZGPY0KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const firestore = getFirestore(app);

export { firestore };
