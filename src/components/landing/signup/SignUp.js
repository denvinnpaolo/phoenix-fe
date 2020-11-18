import React, { useState, useEffect } from 'react';
import { LoginForm as Form } from '../../../styles/Styles.js'

const SignUp = props => {
    // use this to dispatch data to state for redux
    // const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // possibly use redux?? 
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h1>Join Us!</h1>
            <div>
                <div id="input-cont">
                    <label for='retype'> <span>Email</span>
                    <input 
                        name= "email"
                        value= {newUser.email}
                        onChange= {handleChange}
                        required
                    />
                    </label>
                    <label for='retype' id= "password"> <span>Password</span>
                    <input 
                        name= "password"
                        value= {newUser.password}
                        onChange= {handleChange}
                        required
                    />
                    </label>
                    <label for='retype'> <span>Re-type</span>
                    <input 
                        name= "retype"
                        value= {newUser.password}
                        onChange= {handleChange}
                        required
                    />
                    </label>
                    <label className= "box-label">
                    <input type="checkbox" className="checkbox" required/>
                    Yes, I agree to Ouro's Term's and condition and the Data Policy
                    </label>
                    <label className= "box-label">
                    <input type="checkbox" className="checkbox"/>
                    I would like to receive emails with news & offers from Ouro
                    </label>
                </div>
            </div>
            <div id="btns">
                <button>Cancel</button>
                <button type= "submit" id="sign-up-btn">Create my account!</button>
           </div>
        </Form>
    )
};

export default SignUp;