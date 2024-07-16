// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKwRZPnHpX3Kd-6SyCAMH95v4JtHA4cQM",
  authDomain: "fluentorr-2bde2.firebaseapp.com",
  projectId: "fluentorr-2bde2",
  storageBucket: "fluentorr-2bde2.appspot.com",
  messagingSenderId: "337358272517",
  appId: "1:337358272517:web:60a692ba4ef487ddb8046c",
  measurementId: "G-NM6T9EWPZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);