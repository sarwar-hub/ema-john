import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm-password" />
                </div>
                <button className='login-btn'>Sign Up</button>
                <p className='routing-text'>Already have an account? <Link to='/login'><span className='link'>Login</span></Link></p>
                <span className='divider'><hr /> <span className='or'>or</span> <hr /></span>
                <button className='login-google'><img src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="" /> Continue with Google</button>
            </form>
            
        </div>
    );
};

export default Register;