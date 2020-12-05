import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import NewRequest from './requests/new/NewRequest.js'
import Private from '../../Private.js';

import { fetchAvailable } from '../../store/actions/index.js'


const Dashboard = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { users, waste } = useSelector(state => {
        return state
    })

    useEffect(() => {
        dispatch(fetchAvailable())
    }, [users])

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