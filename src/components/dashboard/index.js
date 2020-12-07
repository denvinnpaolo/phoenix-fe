import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import NewRequest from './requests/new/NewRequest.js'
import Private from '../../Private.js';

import { fetchAvailable, fetchPickupByTI, fetchCompletedByTI, fetchCanceledByTI } from '../../store/actions/index.js'


const Dashboard = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    let id = {}

    const { users, available } = useSelector(state => {
        return state
    });


    if(users.userData.type === 'wt'){
        id['transformer_id'] = users.userData.id
    } else if (users.userData.type === 'wp'){
        id['producer_id'] = users.userData.id
    };

    useEffect(() => {
        dispatch(fetchAvailable());
        dispatch(fetchPickupByTI(id))
        dispatch(fetchCompletedByTI(id))
        dispatch(fetchCanceledByTI(id))
    }, [])


 
    return(
        <div id='dashboard-container'>
            <Nav />
            <Private to="/home" component={Home} />


        </div>
    )

}

export default Dashboard;
