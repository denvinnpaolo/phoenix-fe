import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Moment from 'moment';

import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';

import { fetchAvailable } from '../../../../store/actions/index.js';
import Loading from '../.././../UI/Loading.js'
import { useHistory } from 'react-router-dom';

const AllRequest = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { available, users } = useSelector(state => state);

    let userInfo = users.userData

    useEffect(() => {
        dispatch(fetchAvailable())
    },[dispatch]);

    const handleClick = e => {
        console.log(e)
        history.push('/available/schedule')
    }
    

    if(!available.availableData.data){
        return <Loading />
    } else {
        return(
            <div id="all-req-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{`Welcome back,${userInfo.name}`}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell size="1.1em" />
                        <BsPerson size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container">
                        <span id="allreq-component-header">Pick up Request</span>
                    </div>
                    <div id="allreq-sort-cont">
                        <div id="allreq-sort-btns">
                            <BsFunnelFill size="1.6em"/>
                            <RiArrowUpDownFill size="1.5em" />
                        </div>
                        <div id="allreq-sort-search">
                            <BsSearch size="1.4em" />
                        </div>
                    </div>
                    <div id="allreq-tbl-cont">
                        <div id="allreq-tbl-div">
                            <div id="allreq-tbl">
                                <div id="allreq-data-labels">
                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>Pick-up Date</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>Time Available</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>Address</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>items</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>Type of Waste</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data" style={{fontSize: ".9em", fontWeight: "bold"}}>Pick-up Selection</span>

                                </div>
                                <InfiniteScroll
                                    dataLength={available.availableData.data.length}
                                    style={{width: "100%", height: "100%"}}
                                    scrollableTarget="allreq-tbl"
                                >
                                    {available.availableData.data.map(item=>{
                                        return( 
                                            <div id="allreq-data-row" onClick={()=> {
                                                handleClick(item.id)
                                            }}>
                                                <span className="allreq-data">{Moment(item.exp).format('MMMM DD, YYYY')}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                
                                                <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                
                                                <span className="allreq-data">{item.address}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                
                                                <span className="allreq-data">{item.description}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                
                                                <span className="allreq-data">{item.description}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                                
                                                <span className="allreq-data">{<input type="checkbox"/>}</span>


                                            </div>
                                        )
                                    })}
                                </InfiniteScroll>
                            </div>
                            <div id="allreq-tbl-btns"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default AllRequest;