import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import WT from '../wt/WT.js'

const SignUp = props => {
    // use this to dispatch data to state for redux
    // const dispatch = useDispatch();

    const history = useHistory(); 

    // const handleChange = e => {
    //     setNewUser({
    //         ...newUser,
    //         [e.target.name]: e.target.value
    //     });
    // };

    const handleClick = e => {
        e.preventDefault();
        let name = e.target.name;
        history.push(`/${name}-register`)
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
                    <button name="wp" className="register-btn">Waste Producer</button>
                </div>
            </div>
        </div>
        // <Form onSubmit={handleSubmit}>
        //     <h1>Join Us!</h1>
        //     <div>
        //         <div id="input-cont">
        //             <label for='retype'> <span>Email</span>
        //             <input 
        //                 name= "email"
        //                 value= {newUser.email}
        //                 onChange= {handleChange}
        //                 required
        //             />
        //             </label>
        //             <label for='retype' id= "password"> <span>Password</span>
        //             <input 
        //                 name= "password"
        //                 value= {newUser.password}
        //                 onChange= {handleChange}
        //                 required
        //             />
        //             </label>
        //             <label for='retype'> <span>Re-type</span>
        //             <input 
        //                 name= "retype"
        //                 value= {newUser.password}
        //                 onChange= {handleChange}
        //                 required
        //             />
        //             </label>
        //             <label className= "box-label">
        //             <input type="checkbox" className="checkbox" required/>
        //             Yes, I agree to Ouro's Term's and condition and the Data Policy
        //             </label>
        //             <label className= "box-label">
        //             <input type="checkbox" className="checkbox"/>
        //             I would like to receive emails with news & offers from Ouro
        //             </label>
        //         </div>
        //     </div>
        //     <div id="btns">
        //         <button>Cancel</button>
        //         <button type= "submit" id="sign-up-btn">Create my account!</button>
        //    </div>
        // </Form>
    )
};

export default SignUp;