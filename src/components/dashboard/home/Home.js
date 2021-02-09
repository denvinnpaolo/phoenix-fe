import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';


import { BsBell, BsPerson, BsSearch, BsPlus } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';

import Upcoming from '../overview/Upcoming.js';
import Completed from '../overview/Completed.js';
import Canceled from '../overview/Canceled.js'
import NewRequest from '../requests/new/NewRequest.js';
import { fetchMultiAvail } from '../../../store/actions/index.js'
import Loading from '../../UI/loading/Loading.js';


const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const  {userData, loggedIn, token} = useSelector(state => state.users);



    const [overviewChoices, setOverviewChoices] = useState({
        all: false,
        today: false,
        week: true,
        month: false,
        active: "week"
    })

    let multiWastes ={}

    
    

    const activeCat = e => {
        console.log(e)
        setOverviewChoices({
            ...overviewChoices,
            [e.currentTarget.id]: true,
            [overviewChoices.active]:false,
            active: e.currentTarget.id
        })

    }

    const handleSchedule = () => {
        dispatch(fetchMultiAvail(multiWastes))
        .then(()=> history.push('/available/schedule/multi'))
    }

    const ToMap = e => {

    }

    // if(!token && !loggedIn){
    //     <Redirect to={'/'} />
    // } else {
        if(!userData.userdata){
            return <Loading />
        } else {
            return(
                <div id="home-container">
                    <div id="home-contents-container">
                        <div id="welcome-header-container">
                            <div id="welcome-header-text">
                                <span id="welcome-header">{`${userData.userdata.company_name.toUpperCase()}`}</span>
                            </div>
                            <div id="welcome-header-alerts">
                                <BsBell className="clickable clickable-icons-res" size="1.1em" />
                                <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                            </div>
                        </div>
                        <div id="overview-container">
                            <div id="overview-header-container">
                                <span id="dash-component-header">Overview</span>
                            </div>
                            <div id="overview-sort-container">
                                <span  id={"all"} className={`overview-category-choices clickable  ${overviewChoices.all? "active-overview" : null}`}  onClick={activeCat}>All</span>
                                <span  id={"today"} className={`overview-category-choices clickable  ${overviewChoices.today? "active-overview" : null}`}  onClick={activeCat}>Today</span>
                                <span id={"week"} className={`overview-category-choices clickable ${overviewChoices.week? "active-overview" : null}`}  onClick={activeCat}>This week</span>
                                <span id={"month"} className={`overview-category-choices clickable ${overviewChoices.month? "active-overview" : null}`}  onClick={activeCat}>This month</span>
                            </div>
                            <div id="overview-contents-container">
                                <div id="dashboard-overview-component">
                                    <div id="overview-avail-cont">
                                        <Upcoming sort={overviewChoices} />
                                    </div>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                    <div id="overview-comp-cont">
                                        <Completed sort={overviewChoices} />
                                    </div>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                    <div id="overview-incomp-cont">
                                        <Canceled sort={overviewChoices} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="pickup-content-container">
                            {userData.userdata.type === 'wt'?                        
                                <div id="pickup-header-container">
                                    <div id="pickup-header-left">
                                        <div id="pickup-inner-left">
                                            <span id="pickup-header-text">New Pick-up Requests</span>
                                            <Link to="/available/request/all" id="pickup-content-button" style={{textDecoration: "none", fontSize:'.6em', color: "black", textAlign: "center"}}>View All Requests</Link>
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
                                :
                                <div id="pickup-header-container">
                                <div id="pickup-header-left">
                                    <div id="pickup-inner-left">
                                        <span id="pickup-header-text">Recent Posts</span>
                                        <Link to="/available/request/all" id="pickup-content-button" style={{textDecoration: "none", fontSize:'.6em', color: "black", textAlign: "center"}}>View All Requests</Link>
                                        <div id="pickup-map-link" onClick={ToMap}>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div id="pickup-header-right" style={{display:'flex'}}>
                                <BsPlus className="clickable" size={'1.5em'} 
                                    onClick={()=>{
                                        history.push('/available/add')}
                                    }
                                />
                                </div>
                            </div>
                            }
                            <div id="pickup-contents-container">
                                <div id="pickup-overview-component">
                                    <NewRequest multiWastes={multiWastes} sort={overviewChoices} />
                                    <div id="overview-pickup-btn">
                                    {userData.userdata.type === 'wt'?

                                        <button className="allreq-btn" style={{backgroundColor: "#FF9B64", width: "10%", height: "60%", fontSize: ".15em"}} onClick={handleSchedule}>Schedule Pick Up</button>
                                        :
                                        null
                                    }
                                    </div>
                                
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }   ;

export default Home;