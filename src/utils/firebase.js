// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOI0hXB4VmOFCdhzvpL5ytGDnRwtSqLXE",
  authDomain: "netflixgpt-f13dc.firebaseapp.com",
  projectId: "netflixgpt-f13dc",
  storageBucket: "netflixgpt-f13dc.firebasestorage.app",
  messagingSenderId: "6496179748",
  appId: "1:6496179748:web:418676c406430a7ebc6ab1",
  measurementId: "G-VY0YC2C3ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();