import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OuroLogo from '../../../assets/img/ouro/ourologo.png'


import { ImBubbles } from 'react-icons/im'

const Nav = () => {

    let atLogin = false
    if(window.location.href.indexOf("login") > -1) {
        atLogin = true
    } 

    return(
        <div id="nav-container">
            <div id="logo-container">
                <Link to="/" style={{ textDecoration: 'none',color: 'white'}}>
                    <img src={OuroLogo} style={{maxWidth:"100%",height:"3em", objectFit: "contain"}} />
                </Link>
            </div>
            
            <div id="nav-btns">
                <div className="lnd-nav-btn">
                {atLogin? 
                    <Link to="/welcome/register" style={{ textDecoration: 'none',color: 'white'}}>Register</Link>
                    :
                    <Link to="/welcome/login" style={{ textDecoration: 'none',color: 'white'}}>Log In</Link>
                }
                </div>
                <div className="lnd-nav-btn">
                    <Link to="/welcome/help" style={{ textDecoration: 'none',color: 'white'}}>Help</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;