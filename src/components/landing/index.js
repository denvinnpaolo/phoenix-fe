import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Nav from './nav/Nav.js'
import SignUpForm from './wt/SignUpForm.js'
import SignUpLanding from './signup/SignUp.js'
import Login from './login/Login.js';
import Help from './help/Help.js'
import Main from './website/main/Main.js'
import About from './website/about/About.js';
import Contact from './website/contact/Contact.js'


const LandingPage = () => {
    const { loggedIn } = useSelector(state => state.users)
    const history = useHistory();

    const toDash = e => {
        console.log(loggedIn)
        history.push('/')
    }
    return(
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/welcome/" component={Nav} />
            <Route path="/welcome/register" component={SignUpLanding} />
            <Route path="/welcome/wp-register" component={SignUpForm} />
            <Route path="/welcome/wt-register" component={SignUpForm} />
            <Route exact path="/welcome/login" component={Login} />
            <Route exact path ="/welcome/help" component={Help} />
        </div>
    )
}

export default LandingPage;