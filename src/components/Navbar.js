import React from 'react';
import { Link } from 'react-router-dom';
<h1 style ={{color:"blue"}}>Welcome to Adam's Version of Stranger's Things!</h1>
const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/profile'>Profile</Link>
        
        {
          token ? (
            <Link to='/' onClick={ () => logout() }>Logout</Link>
          ) : (
            <>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar;