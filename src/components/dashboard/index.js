import React, { useState, useEffect } from 'react';
import {  useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import NewRequest from './requests/new/NewRequest.js'
import Private from '../../Private.js';

import { fetchAvailable, fetchByTransformerId } from '../../store/actions/index.js'


const Dashboard = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    let id = {}

    let wasteData = {}
    let pickupData = {}

    const { users, waste } = useSelector(state => {
        return state
    });


    if(users.userData.type === 'wt'){
        id['transformer_id'] = users.userData.id
    } else if (users.userData.type === 'wp'){
        id['producer_id'] = users.userData.id
    };

    useEffect(() => {
        dispatch(fetchAvailable())
    }, [users])

    useEffect(() => {
        dispatch(fetchByTransformerId(id))
    }, [users])


    setTimeout(()=> {
        wasteData = waste.wasteData 
        pickupData = waste.pickupData
        console.log(wasteData, pickupData)
    }, 2000)
    return(
        <div id='dashboard-container'>
            {console.log(waste)}
            <Nav />
            <Private to="/home" component={Home} />


        </div>
    )

}

export default Dashboard;

// <Route to="/available/request/all" component={AllRequest} />
// <Route to="/available/schedule/" component={NewRequest} />