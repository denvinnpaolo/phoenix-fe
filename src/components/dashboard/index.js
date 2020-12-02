import React, { useState } from 'react';
import { Redirect, useHistory, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import Private from '../../Private.js';

const Dashboard = props => {

    const history = useHistory();

    return(
        <div id='dashboard-container'>
            <Nav />
            <Home />

        </div>
    )

}

export default Dashboard;