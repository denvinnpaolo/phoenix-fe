import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Nav from './nav/Nav.js'

const Dashboard = props => {
    const { loggedIn } = useSelector(state => state.user);

    const history = useHistory();

    return(
        <div id='dashboard-container'>
            <Nav />
        </div>
    )

}

export default Dashboard;