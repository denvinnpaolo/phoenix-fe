import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { BsBell, BsPerson, BsSearch } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';

import Upcoming from '../overview/Upcoming.js';
import Completed from '../overview/Completed.js';
import Canceled from '../overview/Canceled.js'


const Home = props => {

    const [overviewChoices, setOverviewChoices] = useState({
        today: false,
        week: true,
        month: false,
        active: "week"
    })

    let { userdata } = useSelector(state => state.users.userData);

    if(userdata === undefined) {
        let token = window.localStorage.getItem('token');
        userdata=jwt_decode(token);
    }
    

    const activeCat = e => {
        setOverviewChoices({
            ...overviewChoices,
            [e.currentTarget.id]: true,
            [overviewChoices.active]:false,
            active: e.currentTarget.id
        })

    }

    const ToMap = e => {

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
                        <span id="dash-component-header">Overview</span>
                    </div>
                    <div id="overview-sort-container">
                        <span  id={"today"} className={`overview-category-choices  ${overviewChoices.today? "active-overview" : null}`}  onClick={activeCat}>Today</span>
                        <span id={"week"} className={`overview-category-choices ${overviewChoices.week? "active-overview" : null}`}  onClick={activeCat}>This week</span>
                        <span id={"month"} className={`overview-category-choices ${overviewChoices.month? "active-overview" : null}`}  onClick={activeCat}>This month</span>
                    </div>
                    <div id="overview-contents-container">
                        <div id="dashboard-overview-component">
                            <div id="overview-avail-cont">
                                <Upcoming />
                            </div>
                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                            <div id="overview-comp-cont">
                                <Completed />
                            </div>
                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                            <div id="overview-incomp-cont">
                                <Canceled />
                            </div>


                        </div>
                    </div>
                </div>
                <div id="pickup-content-container">
                    <div id="pickup-header-container">
                        <div id="pickup-header-left">
                            <div id="pickup-inner-left">
                                <span id="pickup-header-text">New Pick-up Requests</span>
                                <button id="pickup-content-button">View All Requests</button>
                                <div id="pickup-map-link" onClick={ToMap}>
                                    <FaMapMarkedAlt />
                                    <span style={{fontSize: ".7em", textDecoration: "underline"}}>Map view</span>
                                </div>
                            </div>
                        </div>
                        <div id="pickup-header-right">
                            <BsSearch />
                        </div>
                    </div>
                    <div id="pickup-contents-container">
                        <div id="pickup-overview-component"></div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Home;