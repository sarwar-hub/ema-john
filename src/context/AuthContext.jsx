import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase-config';


export const Authentication = createContext(null);
const auth = getAuth(app);


const AuthContext = ({children}) => {

    // loader
    const [loadding, setLoadding] = useState(true);

    // user state
    const [user, setUser] = useState({});
    console.log(user?.email);

    // catch current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoadding(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email varify
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }




    // logout
    const logOut = () => {
        return signOut(auth);
    }

    const data = {
        user,
        createUser,
        verifyEmail,
        login,
        logOut,
        setLoadding,
        loadding
    }

    return (
        <Authentication.Provider value={data}>
            {children}
        </Authentication.Provider>
    );
};

export default AuthContext;