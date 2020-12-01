import React, { useState } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import UserInfo from './UserInfo.js';
import CompanyInfo from './CompanyInfo.js';
import Confirm from './Confirm.js';

const WTransformer = () => {

    const [newUser, setNewUser] = useState({
        step: 0,
        company_name:'',
        company_size:0,
        website: '',
        company_address: '',
        company_phone:'',
        name: '',
        job_title: '',
        email: '',
        phone: '',
        password:''
    })


    function SwitchCase(props) {
        switch(newUser.step){
            case 1:
                return(
                    <UserInfo 
                        user={newUser}
                        nextStep={nextStep} 
                        handleChange={handleChange} 
                    />
                );
            case 2:
                return(
                    <CompanyInfo 
                        user={newUser}
                        nextStep={nextStep}
                        prevStep={prevStep} 
                        handleChange={handleChange} 
                    />
                );
            case 3:
                return(
                    <Confirm
                        user={newUser}      
                        nextStep={nextStep}
                        prevStep={prevStep} 
                        handleChange={handleChange} 
                    />
                );
            case 4:
                <Redirect to="/dashboard" />
            default:
                return <h1>Hi</h1>
                console.log('multi-step form :)')
        }

    };


    const nextStep = () => {
        const { step } = newUser;
        setNewUser({...newUser, step: step + 1});
    }

    const prevStep = () => {
        const { step } = newUser;
        setNewUser({...newUser, step: step - 1});
    }

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div id="wt-container">
            <div id="wt-inner-container">
                <div id="wt-text-cont">
                    <span id="landing-header" className="landing-text">Waste Transformer</span>
                    <span className="landing-text">Tell us about the company</span>
                </div>
                <div id="wt-form-cont">
                    <SwitchCase />
                </div>

                <div id="wt-btns-cont">
                    <div id="wt-btns-inner">
                        <button className="wt-register-btn">Cancel</button>
                        <button 
                            className="wt-register-btn"
                            style={{backgroundColor: "#FF9B64", border: "1px solid #FF9B64"}}
                        >
                          Next
                        </button>
                    </div>

                </div>

            </div>
            
        </div>
    )
};

export default WTransformer;