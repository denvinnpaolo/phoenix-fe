import React from 'react';
import { useHistory } from 'react-router-dom';
import OuroLogo from '../../../../assets/img/ouro/ourologo.png'


const Nav = () => {
    const history = useHistory();

    return(
        <div id="main-nav-container">
            <div id="main-logo-container">
                <img src={OuroLogo} onClick={()=> {history.push('/')}} style={{maxWidth:"100%",height:"3em", objectFit: "contain"}} />
            </div>
        
        <div id="main-nav-btns">
            <span className="main-nav-btn clickable-span">WASTE TRANSFORMER</span>
            <span className="main-nav-btn clickable-span" >WASTE PRODUCER</span>
            <span className="main-nav-btn clickable-span" onClick={()=> history.push('/about')}>ABOUT</span>
            <span className="main-nav-btn clickable-span">CONTACT</span>
            <button className="main-join-btn" onClick={()=> history.push('/welcome/register')}>JOIN OURO</button>
            <span className="main-nav-btn clickable-span" onClick={()=> history.push('/welcome/login')}>LOG IN</span>
        </div>
    </div>
    )
}

export default Nav