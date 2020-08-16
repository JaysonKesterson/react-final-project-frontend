import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
    <h2>Welcome, please <Link className="button" to="/login">Log In</Link> or <Link className="button" to="/signup">Sign Up</Link>!</h2>
    </div>
);

export default Home;
