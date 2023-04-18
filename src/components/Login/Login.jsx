import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Authentication } from '../../context/AuthContext';

const Login = () => {

    const {user, login} = useContext(Authentication);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleLogin = async(event) => {
        event.preventDefault();
        setError('');
    

        const email = event.target.email.value;
        const password = event.target.password.value;

        // login
        try {
            await login(email, password);
            navigate('/')
        } catch(error) {
            setError(error.message);
            return;
        }

        event.target.reset();
    }

   

    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className='form'>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                {error&&

                <div className='error'>{error}</div>
                }
                <button className='login-btn'>Login</button>
                <p className='routing-text'>New to Ema-John? <Link to='/register'><span className='link'>Create New Account</span></Link></p>
                <span className='divider'><hr /> <span className='or'>or</span> <hr /></span>
                <button className='login-google'><img src="/google.png" alt="" /> Continue with Google</button>
            </form>
            
        </div>
    );
};

export default Login;