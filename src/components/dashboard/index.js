import React, { useState, useEffect } from 'react';
import {  Switch, useHistory, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import PickupBook from './schedule/pickupBook/PickupBook.js'
import NewRequest from './requests/new/NewRequest.js'



const Dashboard = props => {
    let id = {}
    const dispatch = useDispatch();

    const { users,available } = useSelector(state => {
        return state
    });


    if(users.userData.type === 'wt'){
        id['transformer_id'] = users.userData.id
    } else if (users.userData.type === 'wp'){
        id['producer_id'] = users.userData.id
    };

 
    return(
        <div id='dashboard-container'>
            <Nav />
            <Route path="/home" render={()=> <Home />}/>
            <Route exact path="/" render={()=> <Home />}/>
            <Route path="/available/request/all" render={()=><AllRequest />} />
            <Route path="/available/schedule" render={()=><PickupBook/> } />
        </div>
    )
}

export default Dashboard;
