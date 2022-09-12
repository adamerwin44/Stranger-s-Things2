import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Welcome to Adam's Version of Stranger's Things!</h1>
      <p>
         If you want an account Click {" "}
        <Navbar to="/register">Here!</Navbar>
      </p>
      <p>
        Browse Only ? Click{" "}
        <Navbar to="/posts">Here!</Navbar>
      </p>
    </div>
  )
}

export default Home;