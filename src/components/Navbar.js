import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button"



const Navbar = ({ logout, token }) => {
  return (
    
    <header>
      <h1>Welcome to Adam's Version of Stranger's Things!</h1>
      <nav>
        <Button variant = "contained" color= "error" ></Button>
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
              <Link to='/EditPost'>EditPost</Link>
              
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar;