import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
   
    // const navigate = useNavigate();
    
   const handleNameBlur = event => {
       setName(event.target.value);
   } 
 

  const handleAddressdBlur = event =>{
      setAddress(event.target.value)
  }
 
  const handlePhoneNumberBlur = event =>{
    setPhone(event.target.value)
  } 

  const handleCreateUser = event =>{
     event.preventDefault();
     const shipping = {name, email, address, phone}
     console.log(shipping);
  }

   


    return (
        <div className='my-form-container'>
        <div>
        <h2 className='form-title'>Shipping</h2>
       <form onSubmit={handleCreateUser}>
           <div className='my-input-group'>
              <label htmlFor="name">Name</label>
              <input onBlur={handleNameBlur} type="text" name='name' id='' required/>
           </div>
           <div className='my-input-group'>
              <label htmlFor="email">Email</label>
              <input value={user?.email} readOnly type="email" name='email' id='' required/>
           </div>
        
          
          <div className='my-input-group'>
              <label htmlFor="password">Address</label>
              <input onBlur={handleAddressdBlur} type="text" name='address' id='' required />
          </div>
          <div className='my-input-group'>
              <label htmlFor="phone">Phone Number</label>
              <input onBlur={handlePhoneNumberBlur} type="number" name='phone' id='' required />
              <p style={{color:'red'}}>{error}</p>
          </div>

              <input className='form-submit' type="submit" value="Add Shipping" />
       </form>
        
        
    
        </div>
    </div>
    );
};

export default Shipment;