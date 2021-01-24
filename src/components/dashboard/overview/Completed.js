import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";
import DataModal from '../modal/Modal.js'

 
import { BiCalendarCheck } from 'react-icons/bi';

import {fetchCompletedByTI} from'../../../store/actions/index.js';

import Loading from '../../UI/loading/Loading.js'



const Completed = props => {
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    const { completed } = useSelector(state => state)
    const {id, type} = useSelector(state => state.users.userData.userdata );
    const [itemInfo, setItemInfo] = useState(completed.completedData.data? completed.completedData.data[0]: null);


    useEffect(() => {
        if(type === 'wt'){
            dispatch(fetchCompletedByTI({transformer_id: id}))
        } else if(type === 'wp'){
            dispatch(fetchCompletedByTI({producer_id: id}))

        }
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
                        <span >Completed</span>
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
                                completed.completedData.data
                                .sort((a,b) => Moment(a.exp).diff(Moment(b.exp)))
                                .filter(a => {
                                    if(props.sort.today){
                                        return new Date(Moment(a.exp).add(0, 'days')) === new Date() 
                                    } else if(props.sort.week){
                                        return new Date(a.exp) - new Date(Moment().subtract(7, 'days')) > 0
                                    } else if(props.sort.month){
                                        return new Date(Moment(a.exp).add(15, 'days')) - new Date(Moment().subtract(15, 'days')) > 0
                                    } else if(props.sort.all) {
                                        return a
                                    }
                                })
                                .map((item, i)=> 
                                <div 
                                  className="overview-data" 
                                  key={i}
                                  onDoubleClick={()=> {
                                    setModalShow(true) 
                                    setItemInfo(item)
                                  }}
                                >
                                    <div className="overview-inner-div">
                                        <span className="data">
                                            {Moment(item.exp).format('MMM. DD, YYYY')}
                                        </span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        <span className="data" style={{textTransform: 'capitalize'}}> 
                                            {item.time_available}
                                        </span>
                                    </div> 
                                    <DataModal
                                    item={itemInfo}
                                    show={modalShow}
                                    status={'completed'}
                                    upcoming={false}
                                    onHide={()=> setModalShow(false)}
                                    />
                                </div>
                                )
                        }
                        </InfiniteScroll>
                </div>
            </div>
        )

    }

};

export default Completed;