import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './nav/Nav.js'
import SignUpForm from './wt/SignUpForm.js'
import SignUpLanding from './signup/SignUp.js'
import Login from './login/Login.js';


const LandingPage = props => {
    const { loggedIn } = useSelector(state => state.users)
    return(
        <div>
            <Route  path="/" component={Nav}/>
            <Route exact path="/" component={SignUpLanding} />
            <Route path="/wt-register" component={SignUpForm} />
            <Route path="/wp-register" component={SignUpForm} />
            <Route path="/login" component={Login} />
        </div>
    )
}

export default LandingPage;