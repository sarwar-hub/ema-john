import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                <button className='login-btn'>Login</button>
                <p className='routing-text'>New to Ema-John? <Link to='/register'><span className='link'>Create New Account</span></Link></p>
                <span className='divider'><hr /> <span className='or'>or</span> <hr /></span>
                <button className='login-google'><img src="/google.png" alt="" /> Continue with Google</button>
            </form>
            
        </div>
    );
};

export default Login;