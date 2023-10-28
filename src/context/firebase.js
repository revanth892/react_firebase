import {createContext, useContext,useState,useEffect} from "react";

import { initializeApp } from "firebase/app";//1

import { getFirestore} from 'firebase/firestore'

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

const FirebaseContext =createContext(null);//1

const firebaseConfig = {
  apiKey: "AIzaSyC10pMdzPiqyvKn1kf-KNh6VPBqcCkyeYM",
  authDomain: "react-firebase-4e561.firebaseapp.com",
  projectId: "react-firebase-4e561",
  storageBucket: "react-firebase-4e561.appspot.com",
  messagingSenderId: "153275821425",
  appId: "1:153275821425:web:d5008a3aaa117db5d09ad0"
};



export const useFirebase=()=>useContext(FirebaseContext);//1
const firebaseApp =initializeApp(firebaseConfig);//initializing the app
const firebaseAuth=getAuth(firebaseApp);//passing app to auth
const firestore=getFirestore(firebaseApp)
//1
export const FirebaseProvider =(props)=>{
  const[user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  },[])

  const signuptheuser=(email,password)=>
    createUserWithEmailAndPassword(firebaseAuth,email,password);
  
  const signintheuser=(email,password)=>
    signInWithEmailAndPassword(firebaseAuth,email,password);
  
  const isLoggedin = user ? true : false;

  const handlecreatenewlisting=(book,isbn,price,image)=>{};


  return(
    <FirebaseContext.Provider value={{
      signuptheuser,
      signintheuser,
      isLoggedin
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}