import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../login/Login.js'
import SignUp from '../signup/SignUp.js'

const Landing = props => {
    return(
        <div>
                <Route path="/" component={SignUp} />

        </div>
    )
}

export default Landing;