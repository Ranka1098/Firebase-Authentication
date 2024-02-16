import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChxUi9tn9Z70wsp1JzpDIfCgS5C3o0aXk",
  authDomain: "bookify-35250.firebaseapp.com",
  projectId: "bookify-35250",
  storageBucket: "bookify-35250.appspot.com",
  messagingSenderId: "881405233287",
  appId: "1:881405233287:web:68cd6e5e8f87a42b8dd022",
};
const firebaseApp = initializeApp(firebaseConfig);

//context
const FirebaseContext = createContext(null);

//instance
const FirebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

//custome hook
export const usefirebase = () => useContext(FirebaseContext);

// context provider
export const FirebaseProvider = (props) => {
  // detect user login or not
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) setuser(user);
      else setuser(null);
    });
  }, []);

  const loggedIn = user ? true : false;

  console.log(user);

  //database
  const handleCreatenewListing = async (name, isbn, price, cover) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    return await addDoc(collection(firestore, "book"), {
      name,
      isbn,
      price,
      ImgURL: uploadResult.ref.fullPath,
      userUID: user.uid,
      userEmail: user.email,
      displaName: user.displayName,
      userPhoto: user.photoURL,
    });
  };

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
    <FirebaseContext.Provider
      value={{
        signUp,
        login,
        SignInWithGoogle,
        loggedIn,
        handleCreatenewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
