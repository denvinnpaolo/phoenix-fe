import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";

 
import { BiCalendarCheck } from 'react-icons/bi';

import {fetchCompletedByTI} from'../../../store/actions/index.js';

import Loading from '../../UI/Loading.js'



 const Completed = props => {
    const dispatch = useDispatch();
    const { completed } = useSelector(state => state)



    const id = useSelector(state => state.users.userData.id);

    useEffect(() => {
        dispatch(fetchCompletedByTI({transformer_id: id}))
    },[dispatch, completed.newCompleted])



    if(!completed.completedData.data){
        return <Loading />
    } else {
    return(
        <div className="overview-content-container">
            <div className="overview-content-header">
                <div className="overview-header-icon">
                    <div id="overview-circular-iconbg"><BiCalendarCheck  size="80%" color="#288B50"/></div>
                </div>
                <div className="overview-header-info">
                    <span style={{fontSize:"1.5em"}}>Completed</span>
                    <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>{completed.completedData.data.length}</div>
                </div>
            </div>
            <div className="overview-data-container" id="overview-data-container" style={{overflow: "auto"}}>
                    <InfiniteScroll
                        dataLength={completed.completedData.data}
                        style={{width: "100%", height: "100%"}}
                        scrollableTarget="overview-data-container"
                    >
                        {completed.isFetching?
                            <Loading />
                            :
                            completed.completedData.data.map(item => 
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
                            )
                            // null
                    }
                    </InfiniteScroll>
            </div>
        </div>
    )
    }

};

export default Completed;