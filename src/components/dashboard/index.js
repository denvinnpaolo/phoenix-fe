import React, { useState, useEffect } from 'react';
import {  Switch, useHistory, Route } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import NewRequest from './requests/new/NewRequest.js'
import Private from '../../Private.js';


const Dashboard = props => {
    let id = {}

    const { users } = useSelector(state => {
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
        </div>
    )

}

export default Dashboard;
