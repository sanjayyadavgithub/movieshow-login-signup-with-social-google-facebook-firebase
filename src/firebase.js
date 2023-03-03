import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "key",
  authDomain: "domin",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "1f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const facebookprovider = new FacebookAuthProvider();
const googleprovider = new GoogleAuthProvider();


export  {auth,facebookprovider,googleprovideappId
