import React from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const ContextProvider = ({children}) => {

    // user creat
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // ubdeat realtimeuser 
    const updeatCurrentUser = (updet) => {
        return updateProfile(auth.currentUser, updet);
    }
    
    // signInUser 
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const info ={
        creatUser,
        updeatCurrentUser,
        userLogin
    };
    return (
        <div>
            <AuthContext value={info}>{children}</AuthContext>
            
        </div>
    );
};

export default ContextProvider;