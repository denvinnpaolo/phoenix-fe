import React, { useState, useEffect } from 'react';
import {  Switch, useHistory, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import PickupBook from './schedule/pickupBook/PickupBook.js'
import MultiPickup from './schedule/multiPickup/MultiPickup.js'
import Loading from '../UI/Loading.js';



const Dashboard = props => {
    let id = {}
    const dispatch = useDispatch();

    const { users } = useSelector(state => {
        return state
    });

 
    return(
        <div id='dashboard-container'>
            <Nav />
            <Route path="/home" render={()=> <Home />}/>
            <Route exact path="/" render={()=> <Home />}/>
            <Route path="/available/request/all" render={()=><AllRequest />} />
            <Route exact path="/available/schedule" render={()=><PickupBook id={users.userData.userdata.id}/> } />
            <Route path="/available/schedule/multi" render={()=><MultiPickup/> } />

        </div>
    )
}

export default Dashboard;
