import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogo from '../../images/google.svg'
import './Login.css'
const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
   const navigate = useNavigate(); 
   
  const location = useLocation()

   const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(user){
       navigate(from, {replace: true});
    }

  const handleUserSignIn = event => {
      event.preventDefault();
      signInWithEmailAndPassword(email,password);
  }

    return (
        <div className='my-form-container'>
            <div>
            <h2 className='form-title'>Login</h2>
           <form onSubmit={handleUserSignIn}>
               <div className='my-input-group'>
                  <label htmlFor="email">Email</label>
                  <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
               </div>
            
              <div className='my-input-group'>
                  <label htmlFor="password">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
              </div>
              <p style={{color: 'red'}}>{error?.message}</p>
              {
                  loading && <p>Loading...</p>
              }
                  <input className='form-submit' type="submit" value="Login" />
           </form>
             <p className='text-style'>
               New to Ema-John? <Link className='form-link' to = "/signup">Create new account</Link>
             </p>
           <div className='horizontal-divider'>
               <div className='line-left' />
                  <p>or</p>
                 <div className='line-left' />
          </div>
           <div className='input-wrapper'>
           <button className='google-auth'>
              <img src={GoogleLogo} alt='' />
              <p>Continue with Google </p>
          </button>
        </div>
            </div>
        </div>
    );
};

export default Login;