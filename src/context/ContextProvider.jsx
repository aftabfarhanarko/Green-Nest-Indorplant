import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider, 
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // user creat
  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ubdeat realtimeuser
  const updeatCurrentUser = (updet) => {
    setLoding(true);
    return updateProfile(auth.currentUser, updet);
  };

  // signInUser
  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoding(true);
    return signOut(auth);
  }

  const googleLogin = () => {
    return signInWithPopup(auth , googleProvider);
  }
  useEffect(() => {
    const unsucribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });

    return () => {
      unsucribe();
    };
  }, []);

  const info = {
    creatUser,
    updeatCurrentUser,
    userLogin,
    user,
    loding,
    signOutUser,
    googleLogin
  };
  return (
    <div>
      <AuthContext value={info}>{children}</AuthContext>
    </div>
  );
};

export default ContextProvider;
