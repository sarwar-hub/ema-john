import React, { useContext, useState } from 'react';
import './Register.css';
import { Link, Navigate } from 'react-router-dom';
import { Authentication } from '../../context/AuthContext';

const Register = () => {

    const {createUser, verifyEmail, user} = useContext(Authentication);


    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const [notice, setNotice] = useState('');

    const handleRegister = async(event) => {
        setError('');
        setPassError('');
        setNotice('');
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        
        if (password !== confirmPassword) {
            setPassError('Passowrd doesn\'t matched.');
            return;
        }
        if (password.length < 6) {
            setPassError('Password should be at least 6 characters');
            return;
        }


        try{
            await createUser(email, password);
            await verifyEmail();
            setNotice('Check your inbox to varify your email');
        } catch(error) {
            setError(error.message);
            return;
        }

        

        event.target.reset();
    }

    return (
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister} className='form'>
                {error&&

                <div className='error'>{error}</div>
                }
                {notice&&

                <div className='notice'>{notice}</div>
                }
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
                    <input type="password" name="confirmPassword" />
                </div>
                {passError&&

                <div className='pass-error'>{passError}</div>
                }
                <button type='submit' className='login-btn'>Sign Up</button>
                <p className='routing-text'>Already have an account? <Link to='/login'><span className='link'>Login</span></Link></p>
                <span className='divider'><hr /> <span className='or'>or</span> <hr /></span>
                <button className='login-google'><img src="/google.png" alt="" /> Continue with Google</button>
            </form>
            
        </div>
    );
};

export default Register;