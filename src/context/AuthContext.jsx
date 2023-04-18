import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase-config';


export const Authentication = createContext(null);
const auth = getAuth(app);


const AuthContext = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthContext;