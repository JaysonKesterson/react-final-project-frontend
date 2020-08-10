import React from 'react';
import Login from "./Login.js"
import Signup from "./Signup.js"
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
    <h2>Welcome, please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>!</h2>
    </div>
);

export default Home;
