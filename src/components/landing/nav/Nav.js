import React from 'react';
import { Link } from 'react-router-dom';

import { ImBubbles } from 'react-icons/im'

const Nav = props => {
    return(
        <div id="nav-container">
            <div id="logo-container">
                <Link to="/" style={{ textDecoration: 'none',color: 'white'}}>
                    <h1 style={{color: "white", paddingLeft: "30%"}}>Ouro</h1>
                </Link>
            </div>
            
            <div id="nav-btns">
                <div className="lnd-nav-btn">
                    <Link to="/login" style={{ textDecoration: 'none',color: 'white'}}>Log In</Link>
                </div>
                <div className="lnd-nav-btn">
                    <span>Help</span>
                </div>
                <div className="lnd-nav-btn">
                    <ImBubbles color="white" size="1.5em" />
                </div>
            </div>
        </div>
    )
}

export default Nav;