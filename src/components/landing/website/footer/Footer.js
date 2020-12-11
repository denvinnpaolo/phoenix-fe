import React from 'react';

const Footer = () => {
    return (
        <div id="main-content-footer">
        <div id="main-footer-linkscont">
            <div className="main-footer-link">
                <span style={{fontSize: ".70em", color:"#FF9B64", fontWeight: "bolder"}}>PRODUCT</span>
                <span style={{color: "white"}}>Features</span>
                <span style={{color: "white"}}>FAQ</span>
            </div>
            <div className="main-footer-link">
                <span style={{fontSize: ".70em", color:"#FF9B64", fontWeight: "bolder"}}>COMPANY</span>
                <span style={{color: "white"}}>About</span>
                <span style={{color: "white"}}>Press</span>
            </div>
            <div className="main-footer-link">
                <span style={{fontSize: ".70em", color:"#FF9B64", fontWeight: "bolder"}}>SUPPORT</span>
                <span style={{color: "white"}}>Tutorials</span>
                <span style={{color: "white"}}>Contacts</span>
            </div>
        </div>
        <div id="main-footer-copyright" style={{color: "white"}}>Copyright © 2020 Ouro. All rights reserved.</div>
    </div>
    )
};

export default Footer;