import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ImBubbles } from 'react-icons/im'

const Nav = props => {

    const {loggedIn} = useSelector(state => state.users)

    return(
        <div id="nav-container">
            <div id="logo-container">
                <Link to="/" style={{ textDecoration: 'none',color: 'white'}}>
                    <h1 style={{color: "white", paddingLeft: "30%"}}>Ouro</h1>
                </Link>
            </div>
            
            <div id="nav-btns">
                <div className="lnd-nav-btn">
                {loggedIn? 
                    <Link to="/dashboard" style={{ textDecoration: 'none',color: 'white'}}>Dashboard</Link>
                    :
                    <Link to="/login" style={{ textDecoration: 'none',color: 'white'}}>Log In</Link>
                }
                </div>
                <div className="lnd-nav-btn">
                    <span>Help</span>
                </div>
            </div>
        </div>
    )
}

export default Nav;