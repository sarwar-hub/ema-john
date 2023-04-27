import React, { children, useContext } from 'react';
import { Authentication } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loadding} = useContext(Authentication);
    const location = useLocation();
    console.log(location)
    if (loadding) {
        return <div className='loadder'><h1>Loadding...</h1></div>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>;
};

export default PrivateRoute;