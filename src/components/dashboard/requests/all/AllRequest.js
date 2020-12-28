import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Moment from 'moment';

import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';


import { fetchAvailable, fetchAvailById, fetchMultiAvail, viewPostedById } from '../../../../store/actions/index.js';
import Loading from '../.././../UI/loading/Loading.js'
import { useHistory } from 'react-router-dom';

const AllRequest = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { available, users, view } = useSelector(state => state);

    let multiWastes = {}

    useEffect(() => {
        dispatch(fetchAvailable())
    },[dispatch]);

    useEffect(()=> {
        dispatch(viewPostedById({id:users.userData.id}))
    },[dispatch]);

    const handleDBClick = id => {
        dispatch(fetchAvailById({id: id}))
        history.push('/available/schedule')
    }

    const handleCheck = item => {
        if(multiWastes[item.id.toString()]){
            delete multiWastes[item.id.toString()]
        } else {
            multiWastes[item.id.toString()] = item
        }
    }

    const handleSchedule = () => {
 
        dispatch(fetchMultiAvail(multiWastes))
        history.push('/available/schedule/multi')
    }
    

    if(!view.postedById.data  && !available.availableData.data ){
        return <Loading />
    } else {
        if(users.userData.type==='wt'){
            return(
                <div id="all-req-container">
                    <div id="welcome-header-container">
                        <div id="welcome-header-text">

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
                        <div id="allreq-tbl-cont" >
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
                                    {!available.availableData.data? 
                                    <Loading />
                                    :
                                    <InfiniteScroll
                                        dataLength={available.availableData.data.length}
                                        style={{width: "100%", height: "100%"}}
                                        scrollableTarget="allreq-tbl"
                                    >
                                        {available.availableData.data.map(item=>{
                                            return( 
                                                <div id="allreq-data-row" onDoubleClick={()=> {
                                                    handleDBClick(item.id)
                                                }}>
                                                    <span className="allreq-data">{Moment(item.exp).format('MMMM DD, YYYY')}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">{`${item.address.split(",")[1]} ${item.address.split(",")[2]}`}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">{item.items}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">Waste</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">{<input type="checkbox" onClick={()=> handleCheck({id: item.id})}/>} </span>


                                                </div>
                                            )
                                        })
                                    }
                                    </InfiniteScroll>
                                    }
                                </div>
                                <div id="allreq-tbl-btns">
                                        <div id="allreq-btm-btns">
                                            <button className="allreq-btn">Map view</button>
                                            <button className="allreq-btn" style={{backgroundColor: "#FF9B64"}} onClick={handleSchedule}>Schedule Pick Up</button>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
            <div id="all-req-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">

                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell size="1.1em" />
                        <BsPerson size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container">
                        <span id="allreq-component-header">Posts</span>
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
                    <div id="allreq-tbl-cont" >
                        <div id="allreq-tbl-div">
                            <div id="allreq-tbl">
                                <div id="allreq-data-labels">
                                    <span className="allreq-data-overview">Expiration</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview">Time Available</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Items</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Confirmed</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Company</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview">Phone</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                    
                                        <span className="allreq-data-overview"></span>
                                </div>
                                {!available.availableData.data? 
                                <Loading />
                                :
                                <InfiniteScroll
                                    dataLength={view.postedById.data.length}
                                    style={{width: "100%", height: "100%"}}
                                    scrollableTarget="allreq-tbl"
                                >
                                    {view.postedById.data.map(item=>{
                                        return( 
                                            <div id="allreq-data-row" onDoubleClick={()=> {
                                                handleDBClick(item.id)
                                            }}>
                                            <span className="allreq-data" style={{fontSize: ".8em"}}>{Moment(item.exp).format('MMM. DD, YYYY')}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
        
                                            <span className="allreq-data">{item.items}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
        
                                            <span className="allreq-data">{item.transformer_id? "Y": "" }</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data">{item.transformer_id? item.company_name: ""}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                            
                                            <span className="allreq-data">{item.transformer_id? item.phone: ""}</span>
                                            
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                            <span className="allreq-data"><BiEdit /> Edit  </span>

                                            </div>
                                        )
                                    })
                                }
                                </InfiniteScroll>
                                }
                            </div>
                            <div id="allreq-tbl-btns">
                                    <div id="allreq-btm-btns">
                                        <button className="allreq-btn">Map view</button>
                                        <button className="allreq-btn" style={{backgroundColor: "#FF9B64"}} onClick={handleSchedule}>Schedule Pick Up</button>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }

    }
};

export default AllRequest;