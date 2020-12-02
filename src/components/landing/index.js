import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from './nav/Nav.js'
import SignUpForm from './wt/SignUpForm.js'
import SignUpLanding from './signup/SignUp.js'
import Login from './login/Login.js';
import Help from './help/Help.js'


const LandingPage = props => {
    const { loggedIn } = useSelector(state => state.users)
    const history = useHistory();

    const toDash = e => {
        console.log(loggedIn)
        history.push('/')
    }
    return(
        <div>
            <Nav />
            <Route exact path="/" component={SignUpLanding} />
            <Route exact path="/landing" component={SignUpLanding} />
            <Route path="/wt-register" component={SignUpForm} />
            <Route path="/wp-register" component={SignUpForm} />
            <Route path="/login" component={Login} />
            <Route exact path ="/help" component={Help} />
        </div>
    )
}

export default LandingPage;