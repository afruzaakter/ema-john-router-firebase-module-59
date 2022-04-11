// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';
// import logo from '../../images/Logo.svg';
// import {signOut} from 'firebase/auth';
// import './Header.css';

// const Header = () => {
//     const [user] = useAuthState(auth);

//     const handleSignOut = () => {
//         signOut(auth);
//     }

//     return (
//         <nav className='header'>
//             <img src={logo} alt="" />
//             <div>
//                 <Link to="/shop">Shop</Link>
//                 <Link to="/orders">Orders</Link>
//                 <Link to="/inventory">Inventory</Link>
//                 <Link to="/about">About</Link>
//                 {   user?
//                   <button className='btn btn-primary ms-3' onClick={handleSignOut}>Sign Out</button>
//                   :
//                     <Link to="/login">Login</Link>
//                 }
//             </div>
//         </nav>
//     );
// };

// export default Header;


//responsive navbar


import React from 'react';
import { Container,  Nav, Navbar} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/Logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {

    const [user] = useAuthState(auth);

        const handleSignOut = () => {
             signOut(auth);
       }

    return (
        <div >
           <Navbar collapseOnSelect expand="lg"  variant="dark">
       <Container>
       <Navbar.Brand href="#home">
     
      <img src={logo} alt="" />
      </Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav className='header'>
     <NavLink className={({ isActive }) => (isActive ? "active-link": "header")} to="/shop">Shop</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link": "header")} to="/orders">Orders</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link": "header")} to="/inventory">Inventory</NavLink>

      <NavLink className={({ isActive }) => (isActive ? "active-link": "header")} to="/about">About</NavLink>
          {user?
                   <button className='btn btn-primary ms-3' onClick={handleSignOut}>Sign Out</button>
                  :
                  <NavLink className={({ isActive }) => (isActive ? "active-link": "header")} to="/login">Login</NavLink>
                }
      
     </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;