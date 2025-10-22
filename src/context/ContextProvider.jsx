import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase.config";
import { ref, set, onValue, update as updateDb } from "firebase/database";
const googleProvider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [relUser, setRelUser] = useState({});

  // user creat
  const creatUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const userLogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoding(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const emailVerify = (email) => {
    setLoding(true);
    return sendPasswordResetEmail(auth, email);
  };

  const updeatUserProfile = (ubdet) => {
    return updateProfile(auth.currentUser, ubdet);
  };

  // real time databaseUpdeat
  const ubdeatRealTimeDataBase= (uid, data) => {
    const userRef = ref(db, "users/" + uid);
    return updateDb(userRef, data);
  }
  useEffect(() => {
    if(user?.uid){
      const userRef = ref(db, "users/" +user.uid);
      const unsubcripet = onValue(userRef, (snapshot) =>{
        const data = snapshot.val();
        if(data){
          setRelUser(data);
        }
      })
      return () =>  unsubcripet();
    };
  },[user]);


  useEffect(() => {
    const unsucribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
      if(currentUser){
        const userRef= ref(db, "users/" + currentUser.uid);
        set(userRef, {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "",
          photoURL: currentUser.photoURL || "",
        });
      }
    });

    return () => {
      unsucribe();
    };
  }, []);

  const info = {
    creatUser,
    userLogin,
    user,
    loding,
    setRelUser,
    signOutUser,
    googleLogin,
    emailVerify,
    updeatUserProfile,
    ubdeatRealTimeDataBase,
    relUser
  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
