import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import Moment from 'moment';

import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';


import { fetchArchive, createArchive } from '../../../store/actions/index.js';
import Loading from '../../UI/loading/Loading.js'
import { useHistory } from 'react-router-dom';

const Archive = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { archive,newArchive, users } = useSelector(state => state)

    const [order, setOrder] = useState(true);

    useEffect(()=>{
        if(users.userData.type==='wp'){
            dispatch(fetchArchive({producer_id: users.userData.id}))
        } else if(users.userData.type==='wt'){
            dispatch(fetchArchive({transformer_id: users.userData.id}))
        }
    },[dispatch, newArchive])

    const handleDBClick = e => {

    }

    if(!archive.archiveData.data && !users){
        return <Loading />
    } else {
        return(
            <div id="all-req-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{users.userData.name.toUpperCase()}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell size="1.1em" />
                        <BsPerson size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container" style={{width:"17%"}}>
                        <span id="allreq-component-header" >Archives</span>
                    </div>
                    <div id="allreq-sort-cont">
                        <div id="allreq-sort-btns">
                            <BsFunnelFill size="1.6em"/>
                            <RiArrowUpDownFill
                            size="1.5em" 
                            onClick={()=>{setOrder(!order)}} 
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
                                <div id="allreq-data-labels">
                                    <span className="allreq-data-overview">Date Posted</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview">Date Completed</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Date Canceled</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Company</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview" >Items</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                    
                                        <span className="allreq-data-overview">Price</span>

                                </div>
                                {!archive.archiveData.data? 
                                <Loading />
                                :
                                <InfiniteScroll
                                    dataLength={archive.archiveData.data.length}
                                    style={{width: "100%", height: "100%"}}
                                    scrollableTarget="allreq-tbl"
                                >
                                    {archive.archiveData.data
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
                                            <span className="allreq-data" style={{fontSize: ".8em"}}>{Moment(item.pick_up_date).format('MMM. DD, YYYY')}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.status=== 'completed'? item.pick_up_date:null}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                            <span className="allreq-data">{item.status=== 'canceled'? item.pick_up_date:null}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                            <span className="allreq-data">{item.company_name}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                            
                                            <span className="allreq-data">{item.items}</span>
                                            <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                            <span className="allreq-data">{item.price}</span>
                                            
                                            

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
                                        <button className="allreq-btn" style={{backgroundColor: "#FF9B64"}}>Schedule Pick Up</button>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Archive;