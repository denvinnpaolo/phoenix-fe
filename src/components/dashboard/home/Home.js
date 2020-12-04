import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

const Home = props => {

    let {userdata} = useSelector(state => state.users.userData)

    if(userdata === undefined) {
        let token = window.localStorage.getItem('token');
        userdata=jwt_decode(token)

    }
    
    return(
        <div id="home-container">
            <div id="home-contents-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{`Welcome back, ${userdata.name.toUpperCase()}`}</span>
                    </div>
                    <div id="welcome-header-alerts"></div>
                </div>
                <div id="overview-container">
                    <div id="overview-header-container"></div>
                    <div id="overview-sort-container"></div>
                    <div id="overview-contents-container"></div>
                </div>
                <div id="pickup-content-container"></div>
            </div>
        </div>
    )

};

export default Home;