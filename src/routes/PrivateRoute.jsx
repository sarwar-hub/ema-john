import React, { Children, useContext } from 'react';
import { Authentication } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loadding} = useContext(Authentication);
    if (loadding) {
        return <h1>Loadding...</h1>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;