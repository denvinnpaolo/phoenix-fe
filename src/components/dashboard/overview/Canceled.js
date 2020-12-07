import { BiCalendarMinus } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";

 
import {fetchPickupByTI} from'../../../store/actions/index.js';

import Loading from '../../UI/Loading.js'



 const Canceled = props => {

    const { pickup } = useSelector(state => {
        return state
    })

    const dummyData = [
        {"id": 1, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 2, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 3, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 4, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 5, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 6, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},
        {"id": 7, "date_posted": "2020-11-23", "exp": "2020-11-26", "pick_up_date": "2020-11-25", "time_available": "morning",
        "type": "restaurant","address": "123 lane st", "description": "organic waste", "producer_id": 1,"transformer_id": 1},

    ]

    return(
        <div className="overview-content-container">
            <div className="overview-content-header">
                <div className="overview-header-icon">
                    <div id="overview-circular-iconbg"><BiCalendarMinus  size="80%" color="#288B50"/></div>
                </div>
                <div className="overview-header-info">
                    <span style={{fontSize:"1.5em"}}>Canceled</span>
                    <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>{dummyData.length}</div>
                </div>
            </div>
            <div className="overview-data-container" id="overview-data-container" style={{overflow: "auto"}}>
                {pickup.isFetching?  
                    <Loading /> 
                    : 
                    <InfiniteScroll
                        dataLength={dummyData.length}
                        style={{width: "100%", height: "100%"}}
                        scrollableTarget="overview-data-container"
                    >
                        {dummyData.map(item => 
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
                    // null
                }
            </div>
        </div>
    )

};

export default Canceled;