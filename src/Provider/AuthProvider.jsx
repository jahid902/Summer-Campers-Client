import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();


    const signUpUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // const signInUser = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // const logOut = () => {
    //     return signOut(auth);
    // }

    // const googleLogin = () =>{
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);
    // }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    //             setUser(currentUser);
    //             setLoading(false);
    //     });
    //     return () =>{
    //        return unSubscribe();
    //     }

    // },[])

    const authInfo = {
            user,
            // loading,
            signUpUser,
            // signInUser,
            // googleLogin,
            profileUpdate,
            // logOut,
            
            
            
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;