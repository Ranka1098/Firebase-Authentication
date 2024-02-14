import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyChxUi9tn9Z70wsp1JzpDIfCgS5C3o0aXk",
    authDomain: "bookify-35250.firebaseapp.com",
    projectId: "bookify-35250",
    storageBucket: "bookify-35250.appspot.com",
    messagingSenderId: "881405233287",
    appId: "1:881405233287:web:68cd6e5e8f87a42b8dd022"
  };

  const firebaseApp = initializeApp(firebaseConfig);

export const usefirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};

