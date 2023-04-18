import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase-config';


export const Authentication = createContext(null);
const auth = getAuth(app);


const AuthContext = ({children}) => {

    // user state
    const [user, setUser] = useState({});
    console.log(user);

    // catch current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
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

    const data = {
        user,
        createUser,
        verifyEmail,
    }

    return (
        <Authentication.Provider value={data}>
            {children}
        </Authentication.Provider>
    );
};

export default AuthContext;