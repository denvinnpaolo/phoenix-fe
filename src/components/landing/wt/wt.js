import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserInfo from './UserInfo.js';
import CompanyInfo from './CompanyInfo.js';
import Confirm from './Confirm.js';

const WTransformer = () => {
    const [newUser, setNewUser] = useState({
        step: 1,
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
        <div>
        {switch(step){
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
                console.log('multi-step form :)')
        }}
        </div>
    )
};

export default WTransformer;