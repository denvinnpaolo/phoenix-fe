import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../../../store/actions/index.js'

const Login = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})

    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchUser(user));
        history.push('/home')
    };

    return (
        <div id="login-container">
        <div id="login-input-main">

            <div id="login-header">
                <span id="landing-header" class="landing-text">Log in!</span>
            </div>
            <div id="login-input-container">
                    <div className="companyinfo-inputs-cont">

                        <span>email</span>
                        <input
                            className="register-inputs"
                            name= "email"
                            value= {user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="companyinfo-inputs-cont">
                        <span>password</span>

                        <input
                            className="register-inputs"
                            type="password"
                            name= "password"
                            value= {user.password}
                            onChange= {handleChange}
                        />
                    </div>
                    <div className="companyinfo-inputs-cont">
                        <span style={{ width: "80%", textAlign: 'center'}}><u>Forgot Password?</u></span>
                    </div>
            </div>
            <div id="login-button">
                <div id="login-btn-container">
                    <button className="wt-register-btn"  onClick={()=> history.push('/')}>Cancel</button>

                    <button className="wt-register-btn" style={{backgroundColor: "#FF9B64",  border: "1px solid #FF9B64"}} onClick={handleSubmit}>log in</button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Login