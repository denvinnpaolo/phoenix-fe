import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Moment from 'moment';


import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsPlus } from 'react-icons/bs';


import { fetchAvailable, fetchAvailById, fetchMultiAvail, viewPostedById, fetchPickUpById } from '../../../../store/actions/index.js';
import Loading from '../.././../UI/loading/Loading.js'
import { useHistory } from 'react-router-dom';

const AllRequest = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { available, users, view } = useSelector(state => state);
    const [order, setOrder] = useState(true);

    let multiWastes = {}

    // useEffect(() => {
    //     dispatch(fetchAvailable())
    // },[]);

    useEffect(()=> {
        if(users.userData.userdata.type==='wp'){
            dispatch(viewPostedById({id:users.userData.id}))
        } else if (users.userData.userdata.type==='wt'){
            dispatch(fetchAvailable())
        }
    },[]);

   

    const handleDBClick = item => {
        if(!item.transformer_id){
            if(users.userData.userdata.type==='wt'){
                dispatch(fetchAvailById({id: item.id}))
            } else if(users.userData.userdata.type === 'wp'){
                dispatch(fetchAvailById({producer_id: item.id}))
            }
            history.push('/available/schedule')
        } else {

            if(users.userData.userdata.type==='wt'){
                dispatch(fetchPickUpById({id: item.id}))
            } else if(users.userData.userdata.type === 'wp'){
                dispatch(fetchPickUpById({id: item.id}))
            }
            history.push('/pickup/view')
        }
    };
    

    

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
        if(users.userData.userdata.type==='wt'){
            return(
                <div id="all-req-container">
                    <div id="welcome-header-container">
                        <div id="welcome-header-text">
                            <span id="welcome-header">{users.userData.userdata.company_name.toUpperCase()}</span>
                        </div>
                        <div id="welcome-header-alerts">
                            <BsBell className="clickable clickable-icons-res" size="1.1em" />
                            <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                        </div>
                    </div>
                    <div id="allreq-contents-cont">
                        <div id= "allreq-header-container">
                            <span id="allreq-component-header">Pick up Request</span>
                        </div>
                        <div id="allreq-sort-cont">
                            <div id="allreq-sort-btns">
                                <BsFunnelFill size="1.6em"/>
                                <RiArrowUpDownFill 
                                  onClick={()=>{setOrder(!order)}} 
                                  size="1.5em" 
                                  className="clickable"
                                />
                            </div>
                            <div id="allreq-sort-search">
                                <BsSearch size="1.4em" />
                            </div>
                        </div>
                        <div id="allreq-tbl-cont" >
                            <div id="allreq-tbl-div">
                                <div id="allreq-tbl">
                                    <div id="allreq-data-labels" className="clickable">
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
                                        {available.availableData.data
                                            .sort((a,b) => order? Moment(a.exp).diff(Moment(b.exp)): Moment(b.exp).diff(Moment(a.exp)))
                                            .map(item=>{
                                            return( 
                                                <div id="allreq-data-row" onDoubleClick={()=> {
                                                    handleDBClick(item)
                                                }}>
                                                    <span className="allreq-data">{Moment(item.exp).format('MMMM DD, YYYY')}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">{`${item.address.split(",")[1]} ${item.address.split(",")[2]}`}</span>
                                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                    
                                                    <span className="allreq-data">{item.items.length < 15? item.items : `${item.items.split(",")[0]}, ...` }</span>
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
                                            <button className="allreq-btn allreq-btn-res">Map view</button>
                                            <button className="allreq-btn allreq-btn-res" style={{backgroundColor: "#FF9B64"}} onClick={handleSchedule}>Schedule</button>

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
                        <span id="welcome-header">{users.userData.userdata.company_name.toUpperCase()}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell className="clickable clickable-icons-res" size="1.1em" />
                        <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container" style={{width:"17%"}}>
                        <span id="allreq-component-header" >Posts</span>
                    </div>
                    <div id="allreq-sort-cont">
                        <div id="allreq-sort-btns">
                            <BsFunnelFill className="clickable clickable-icons-res" size="1.6em"/>
                            <RiArrowUpDownFill
                             size="1.5em" 
                             onClick={()=>{setOrder(!order)}} 
                             className="clickable clickable-icons-res"
                            />
                        </div>
                        <div id="allreq-sort-search">
                            <BsPlus className="clickable" size={'1.5em'} 
                            onClick={()=>{
                                history.push('/available/add')}
                            }
                            />
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
                    
                                        <span className="allreq-data-overview" >Type</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Company</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview">Phone</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                    
                                        <span className="allreq-data-overview">Confirmed</span>
                                </div>
                                {!view.postedById.data? 
                                <Loading />
                                :
                                <InfiniteScroll
                                    dataLength={view.postedById.data.length}
                                    style={{width: "100%", height: "100%"}}
                                    scrollableTarget="allreq-tbl"
                                >
                                    {view.postedById.data
                                        .sort((a,b) => order? Moment(a.exp).diff(Moment(b.exp)): Moment(b.exp).diff(Moment(a.exp)))
                                        .map((item, i)=>{
                                        return( 
                                            <div 
                                              id="allreq-data-row" 
                                              className="clickable"
                                              onDoubleClick={()=> {
                                                handleDBClick(item)
                                              }}
                                              key={i}
                                            >
                                            <span className="allreq-data" style={{fontSize: ".8em"}}>{Moment(item.exp).format('MMM. DD, YYYY')}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
        
                                            <span className="allreq-data">{item.items.length < 15? item.items : `${item.items.split(",")[0]}, ...` }</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
        
                                            <span className="allreq-data">{item.type}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data">{item.transformer_id? item.company_name: ""}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                            
                                            <span className="allreq-data">{item.transformer_id? item.phone: ""}</span>
                                            
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                            <span className="allreq-data">{item.transformer_id? "Y": "" }</span>

                                            </div>
                                        )
                                    })
                                }
                                </InfiniteScroll>
                                }
                            </div>
                            <div id="allreq-tbl-btns">
                                    <div id="allreq-btm-btns">
                                        <button className="allreq-btn allreq-btn-res">Map view</button>
                                        <button className="allreq-btn allreq-btn-res" style={{backgroundColor: "#FF9B64"}} onClick={handleSchedule}>Schedule</button>

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