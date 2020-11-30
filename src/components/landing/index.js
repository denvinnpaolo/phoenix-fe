import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './nav/Nav.js'
import Contents from './contents/Contents.js'


const LandingPage = props => {
    const { loggedIn } = useSelector(state => state.users)
    return(loggedIn?
        <Redirect push to ="/dashboard"/>
        :
        <div>

            <Route path="/" component={Nav}/>
            <Switch>
                <Route path="/" component={Contents} />
            </Switch>

        </div>
    )
}

export default LandingPage;