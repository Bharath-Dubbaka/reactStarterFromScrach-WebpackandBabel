import React from 'react';
import {Link, NavLink} from 'react-router-dom'

// import { Container } from '@material-ui/core';
// import "@material-ui/core/styles";

const Navbar = () => {
    return(
    <nav>
                <a>Logo</a>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/privacypolicy'>Privacy policy</NavLink></li>
                </ul>
    </nav>
    )
}


export default Navbar;




