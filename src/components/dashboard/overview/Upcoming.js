import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";

 
import { BiCalendarExclamation } from 'react-icons/bi';

import {fetchAvailable, fetchPickupByTI} from'../../../store/actions/index.js';

import Loading from '../../UI/Loading.js'



 const Upcoming = () => {
    const dispatch = useDispatch();
    const {pickup} = useSelector(state => state)



    const id = useSelector(state => state.users.userData.id);

    useEffect(() => {
        dispatch(fetchPickupByTI({transformer_id: id}))
    },[pickup.newData, dispatch])





    // const dummyData = [
    //     {"id": 1, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 2, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 3, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 4, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 5, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 6, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 7, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 8, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 9, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
    //     {"id": 10, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
    //     "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},

    // ]


    if(!pickup.pickupData.data){
        return <Loading />
    } else {
        return(
            <div className="overview-content-container">
                <div className="overview-content-header">
                    <div className="overview-header-icon">
                        <div id="overview-circular-iconbg"><BiCalendarExclamation  size="80%" color="#288B50"/></div>
                    </div>
                    <div className="overview-header-info">
                        <span style={{fontSize:"1.5em"}}>Upcoming</span>
                        <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>{pickup.pickupData.data.length}</div>
                    </div>
                </div>
                <div className="overview-data-container" id="overview-data-container" style={{overflow: "auto"}}>
                        <InfiniteScroll
                            dataLength={pickup.pickupData.data.length}
                            style={{width: "100%", height: "100%"}}
                            scrollableTarget="overview-data-container"
                        >
                            {pickup.pickupData.data.map(item => 
                                <div className="overview-data">
                                    <div className="overview-inner-div">
                                        <span className="data">
                                            {Moment(item.date_posted).format('MMMM DD, YYYY')}
                                        </span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        <span className="data" style={{textTransform: 'capitalize'}}> 
                                            {item.time_available}
                                        </span>
                                    </div> 
                                </div>
                            )}
                        </InfiniteScroll>
                </div>
            </div>
        )
    }

};

export default Upcoming;