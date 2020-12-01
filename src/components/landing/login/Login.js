import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../store/actions/index.js'

const Login = props => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        type: 'user',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})

    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchUser(user));
    };

    return (
        <div id="login-container">
            <div id="login-header">
                <h2>Log In</h2>
            </div>
            <div id="login-input-container">
                <div id="login-input-main">
                    <form id="login-form" onSubmit={handleSubmit}>
                        <select name="type" value={user.type} onChange={handleChange}>
                            <option value="user">user</option>
                            <option value="orgs">organization</option>
                        </select>
                        <input
                            name= "email"
                            value= {user.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name= "password"
                            value= {user.password}
                            onChange= {handleChange}
                        />
                    </form>
            </div>
            </div>
            <div id="login-button">
                <div id="login-btn-container">
                    <form>
                        <label>
                            <input type="checkbox" name="remember"/>
                            Remember me
                        </label>
                    </form>
                    <button onClick={handleSubmit}>log in</button>
                </div>
            </div>
        </div>
    )
}

export default Login