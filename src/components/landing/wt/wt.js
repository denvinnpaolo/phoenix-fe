import React, { useState } from 'react';
import { Redirect, Switch, useHistory } from 'react-router-dom';
import UserInfo from './UserInfo.js';
import CompanyInfo from './CompanyInfo.js';
import Confirm from './Confirm.js';
import Progress from './ProgressBar.js'

const WTransformer = () => {
    const history = useHistory();

    const [newUser, setNewUser] = useState({
        step: 1,
        percent: 2,
        company_name:'',
        company_size: 10,
        website: '',
        company_address: '',
        company_phone:'',
        name: '',
        job_title: '',
        email: '',
        phone: '',
        password:''
    })



    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    function SwitchCase(props) {
        switch(newUser.step){
            case 1:
                return(
                    <CompanyInfo
                        values={newUser}
                        nextStep={nextStep} 
                        handleChange={handleChange} 
                        setNewUser={setNewUser}
                    />
                );
            case 2:
                return(
                    <UserInfo
                        values={newUser}
                        nextStep={nextStep}
                        prevStep={prevStep} 
                        handleChange={handleChange} 
                        setNewUser={setNewUser}
                    />
                );
            case 3:
                return(
                    <Confirm
                        values={newUser}      
                        nextStep={nextStep}
                        prevStep={prevStep} 
                        handleChange={handleChange} 
                    />
                );
            case 4:
                return(
                    history.push('/dashboard')
                )
            default:
                return <h1>Hi</h1>
                console.log('multi-step form :)')
        }

    };


    const nextStep = () => {
        const { step } = newUser;
        setNewUser({...newUser, step: step + 1, percent: newUser.percent + 49});
    }

    const prevStep = () => {
        const { step } = newUser;
        if(step === 1){
            history.push('/')
        } else {
            setNewUser({...newUser, step: step - 1, percent: newUser.percent - 49});
        }
    }


    return(
        <div id="wt-container">
            <div id="wt-inner-container">
                <div id="wt-text-cont">
                    <span id="landing-header" className="landing-text">Waste Transformer</span>
                    <span className="landing-text">Tell us about the company</span>
                </div>
                <div id="wt-form-cont">
                    <div id="progress-bar">
                        <Progress
                        percent={newUser.percent}
                        fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                        />
                    </div>
                    <div id="wt-form"><SwitchCase /></div>
                </div>

                <div id="wt-btns-cont">
                    <div id="wt-btns-inner">
                        <button onClick={prevStep}className="wt-register-btn">{newUser.step===1? "Cancel" : "Previous"}</button>
                        <button 
                            className="wt-register-btn"
                            onClick={nextStep}
                        >
                          {newUser.step === 3? "Create Account!":"Next"}
                        </button>
                    </div>

                </div>

            </div>
            
        </div>
    )
};

export default WTransformer;