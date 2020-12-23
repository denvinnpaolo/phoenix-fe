import { BiCalendarMinus } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";

 
import {fetchCanceledByTI} from'../../../store/actions/index.js';

import Loading from '../../UI/loading/Loading.js'



 const Canceled = props => {
    const dispatch = useDispatch();
    const { canceled, pickup } = useSelector(state => state)



    const id = useSelector(state => state.users.userData.id);

    useEffect(() => {
        dispatch(fetchCanceledByTI({transformer_id: id}))
    },[dispatch, canceled.newCanceled])



    console.log(window.innerWidth)

    if(!canceled.canceledData.data){
        return <Loading />
    } else {
        return(
            <div className="overview-content-container">
                <div className="overview-content-header">
                    <div className="overview-header-icon">
                        <div id="overview-circular-iconbg"><BiCalendarMinus  size="80%" color="#288B50"/></div>
                    </div>
                    <div className="overview-header-info">
                        <span style={{fontSize:"1.5em"}}>Canceled</span>
                        <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>{canceled.canceledData.data? canceled.canceledData.data.length: 0}</div>
                    </div>
                </div>
                <div className="overview-data-container" id="overview-data-container" style={{overflow: "auto"}}>
                        <InfiniteScroll
                            dataLength={canceled.canceledData.data}
                            style={{width: "100%", height: "100%"}}
                            scrollableTarget="overview-data-container"
                        >
                            {canceled.isFetching?
                                <Loading />
                                :
                                canceled.canceledData.data.map(item => 
                                <div className="overview-data">
                                    <div className="overview-inner-div">
                                        <span className="data">
                                            {Moment(item.date_posted).format('MM/DD/YYYY')}
                                        </span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        <span className="data" style={{textTransform: 'capitalize'}}> 
                                            {item.time_available}
                                        </span>
                                    </div> 
                                </div>
                                )
                        }
                        </InfiniteScroll>
                </div>
            </div>
        )
    }

};

export default Canceled;