import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../login/Login.js'
import SignUp from '../signup/SignUp.js'
import WT from '../wt/WT.js';

const Landing = props => {
    return(
        <div>
                <Route exact path="/" component={SignUp} />
                <Route path="/wt-register" component={WT} />

        </div>
    )
}

export default Landing;