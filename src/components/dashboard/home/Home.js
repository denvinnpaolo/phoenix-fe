import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { BsBell, BsPerson } from 'react-icons/bs'


const Home = props => {

    const [overviewChoices, setOverviewChoices] = useState({
        today: false,
        week: true,
        month: false,
        active: "week"
    })

    let {userdata} = useSelector(state => state.users.userData)

    if(userdata === undefined) {
        let token = window.localStorage.getItem('token');
        userdata=jwt_decode(token)

    }
    

    const activeCat = e => {
        console.log(overviewChoices)
        setOverviewChoices({
            ...overviewChoices,
            [e.currentTarget.id]: true,
            [overviewChoices.active]:false,
            active: e.currentTarget.id

        })

    }
    return(
        <div id="home-container">
            <div id="home-contents-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{`Welcome back, ${userdata.name.toUpperCase()}`}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell size="1.1em" />
                        <BsPerson size="1.7em"  />
                    </div>
                </div>
                <div id="overview-container">
                    <div id="overview-header-container">
                        <span class="dash-component-header">Overview</span>
                    </div>
                    <div id="overview-sort-container">
                        <span  id={"today"} className={`overview-category-choices  ${overviewChoices.today? "active-overview" : null}`}  onClick={activeCat}>Today</span>
                        <span id={"week"} className={`overview-category-choices ${overviewChoices.week? "active-overview" : null}`}  onClick={activeCat}>This week</span>
                        <span id={"month"} className={`overview-category-choices ${overviewChoices.month? "active-overview" : null}`}  onClick={activeCat}>This month</span>
                    </div>
                    <div id="overview-contents-container">
                        <div id="dashboard-overview-component"></div>
                    </div>
                </div>
                <div id="pickup-content-container"></div>
            </div>
        </div>
    )

};

export default Home;