import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../../store/actions/index.js'


import UserInfo from './UserInfo.js';
import CompanyInfo from './CompanyInfo.js';
import Confirm from './Confirm.js';
import Progress from './ProgressBar.js'

const SignUpForm = props => {
    const history = useHistory();
    const dispatch = useDispatch();
    let cannotSubmit = true
    let type = ''

    if(window.location.href.indexOf("wt") > -1) {
        type = 'wt';
    } else if (window.location.href.indexOf("wp") > -1){
        type = 'wp';
    };

    const [newUser, setNewUser] = useState({
        step: 1,
        percent: 2,
        type: type,
        company_name:'',
        category:'',
        company_size: '',
        website: '',
        company_address: '',
        company_phone:'',
        name: '',
        job_title: '',
        phone: '',
        email: '',
        password:''
    });

    function SwitchCase() {
        switch(newUser.step){
            case 1:
                return(
                    <CompanyInfo
                        values={newUser}
                        setNewUser={setNewUser}
                    />
                );
            case 2:
                return(
                    <UserInfo
                        values={newUser}
                        setNewUser={setNewUser}
                    />
                );
            case 3:
                return(
                    <Confirm
                        values={newUser}      
                    />
                );
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


    const handleSubmit = e => {

        dispatch(createUser(newUser))
        history.push('/')
    }

    
    if(newUser.company_name !== '' && newUser.company_address !== '' && newUser.email !== '' && newUser.password !== '' && newUser.company_phone !== ''){
        cannotSubmit = false 
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
                        {newUser.step === 3? 
                            <button 
                                disabled={cannotSubmit}
                                className="wt-register-btn"
                                onClick={handleSubmit}
                                >
                                Create Account!
                            </button> :
                            <button 
                                className="wt-register-btn"
                                onClick={nextStep}
                            >
                              Next
                            </button>}
                    </div>

                </div>

            </div>
            
        </div>
    )
};

export default SignUpForm;