import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../login/Login.js'
import SignUp from '../signup/SignUp.js'

const Landing = props => {
    return(
        <div>
            <Switch>
                <Route path="/register" component={SignUp} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    )
}

export default Landing;