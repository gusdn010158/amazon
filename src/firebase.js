import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEN9E5W-ll_1E9XjV8qJ1CM-jgyNGvMzw",
  authDomain: "fir-39d2e.firebaseapp.com",
  projectId: "fir-39d2e",
  storageBucket: "fir-39d2e.appspot.com",
  messagingSenderId: "927558560601",
  appId: "1:927558560601:web:b6f256d407af4b4eb5ba48",
  measurementId: "G-JD1BK0G75K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);