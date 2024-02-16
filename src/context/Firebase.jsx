import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyChxUi9tn9Z70wsp1JzpDIfCgS5C3o0aXk",
  authDomain: "bookify-35250.firebaseapp.com",
  projectId: "bookify-35250",
  storageBucket: "bookify-35250.appspot.com",
  messagingSenderId: "881405233287",
  appId: "1:881405233287:web:68cd6e5e8f87a42b8dd022",
};

const firebaseApp = initializeApp(firebaseConfig);

const FirebaseAuth = getAuth(firebaseApp);

//custome hook
export const usefirebase = () => useContext(FirebaseContext);

// context provider
export const FirebaseProvider = (props) => {
  // detect user login or not
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth ,user =>{
      if(user) setuser(user)
      else setuser(null)
    })
  }, []);

  const loggedIn = user ? true : false ; 

  //create account register form
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };
  //user login
  const login = (email, password) => {
    signInWithEmailAndPassword(FirebaseAuth, email, password);
  };
  // signin with google
  const googleProvider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    signInWithPopup(FirebaseAuth, googleProvider);
  };
  return (
    <FirebaseContext.Provider value={{ signUp, login, SignInWithGoogle,loggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
