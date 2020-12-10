import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const SignUpLanding = () => {

    const history = useHistory(); 

    const handleClick = e => {
        e.preventDefault();
        let name = e.target.name;
        history.push(`/welcome/${name}-register`)
    }

    return (
        <div id="register-container">
            <div id="inner-register-cont">
                <div id="text-container">
                    <h1 id="landing-header" className="landing-text">Join us!</h1>
                    <span className="landing-text">I'm signing up as a:</span>
                </div>
                <div id="register-btn-container">
                    <button name="wt" 
                        className="register-btn" 
                        onClick={handleClick}
                        >
                            Waste Transformer
                    </button>
                    <button name="wp" 
                        className="register-btn"
                        onClick={handleClick}
                    >
                      Waste Producer
                    </button>
                </div>
            </div>
        </div>
    )
};

export default SignUpLanding;