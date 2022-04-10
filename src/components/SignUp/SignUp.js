import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../images/google.svg';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
  const handleEmailBlur = event =>{
      setEmail(event.target.value)
  }

  const handlePasswordBlur = event =>{
      setPassword(event.target.value)
  }

  const handleConfirmPasswordBlur = event =>{
      setConfirmPassword(event.target.value)
  }
  if(user){
      navigate('/')
  }

  const handleCreateUser = event =>{
      // page reload na korar jonno use kora hoy
      event.preventDefault()
      if(password !== confirmPassword){
          setError('Your two passwords did not match')
          return;
      }
      if(password.length <6){
          setError('Password must be 6 characters or logner');
          return;
      }

      createUserWithEmailAndPassword(email, password);
  }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
       <form onSubmit={handleCreateUser}>
           <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" name='email' id='' required/>
           </div>
        
          
          <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" name='password' id='' required />
          </div>
          <div className='input-group'>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' id='' required />
              <p style={{color:'red'}}>{error}</p>
          </div>

              <input className='form-submit' type="submit" value="Login" />
       </form>
         <p className='text-style'>
            Already have an account?<Link className='form-link' to = "/login">Login</Link>
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

export default SignUp;