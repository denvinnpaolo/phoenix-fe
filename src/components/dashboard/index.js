import React, { useState } from 'react';
import {  useHistory, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import NewRequest from './requests/new/NewRequest.js'
import Private from '../../Private.js';


const Dashboard = props => {

    const history = useHistory();

    return(
        <div id='dashboard-container'>
            <Nav />
            <Private to="/home" component={Home} />


        </div>
    )

}

export default Dashboard;

// <Route to="/available/request/all" component={AllRequest} />
// <Route to="/available/schedule/" component={NewRequest} />