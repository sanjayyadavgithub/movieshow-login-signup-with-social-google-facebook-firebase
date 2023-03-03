import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQitrmUuUc0BysETVOF_uZJIgiEaSV1DA",
  authDomain: "react-firebase-auth-test-d03d7.firebaseapp.com",
  projectId: "react-firebase-auth-test-d03d7",
  storageBucket: "react-firebase-auth-test-d03d7.appspot.com",
  messagingSenderId: "469794408622",
  appId: "1:469794408622:web:76784522ea8738aca9053f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const facebookprovider = new FacebookAuthProvider();
const googleprovider = new GoogleAuthProvider();


export  {auth,facebookprovider,googleprovider}