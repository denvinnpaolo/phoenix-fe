import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";

import { BiCalendarExclamation } from 'react-icons/bi';

import { fetchPickupByTI } from'../../../store/actions/index.js';

import Loading from '../../UI/loading/Loading.js'

import DataModal from '../modal/Modal.js'



const Upcoming = props => {
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    const {pickup, completed, canceled} = useSelector(state => state);

    const { id, type }= useSelector(state => state.users.userData);

    const [itemInfo, setItemInfo] = useState(pickup.pickupData.data? pickup.pickupData.data[0]: null);


    useEffect(() => {
        if(type === 'wt'){
            dispatch(fetchPickupByTI({transformer_id: id}))
        } else if(type === 'wp'){
            dispatch(fetchPickupByTI({producer_id: id}))

        }
    },[dispatch, completed.newCompleted, canceled.newCanceled]);

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
                {!pickup.pickupData.data?
                <Loading/>
                    :
                <div className="overview-data-container" id="overview-data-container" style={{overflow: "auto"}}>
                        <InfiniteScroll
                            dataLength={pickup.pickupData.data.length}
                            style={{width: "100%", height: "100%"}}
                            scrollableTarget="overview-data-container"
                        >
                            {pickup.pickupData.data
                                .sort((a,b) => Moment(a.exp).diff(Moment(b.exp)))
                                .filter(a => {
                                    if(props.sort.today){
                                        return new Date(Moment()).setHours(0,0,0,0) - new Date(Moment(a.exp)).setHours(0,0,0,0) == 0
                                    } else if(props.sort.week){
                                        return Moment(a.exp).isBetween(Moment(), Moment().add(7, 'd'))
                                    } else if(props.sort.month){
                                        return Moment(a.exp).isBetween(Moment(), Moment().add(30, 'd'))
                                    }
                                })
                                .map(item => 
                                  <div className="overview-data" 
                                    onDoubleClick={()=> {
                                        setModalShow(true) 
                                        setItemInfo(item)
                                    }
                                  }>
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
                                        type={type}
                                        show={modalShow}
                                        onHide={()=> setModalShow(false)}
                                        />
                                    </div>
                                
                            )}
                        </InfiniteScroll>
                </div>}
            </div>
        )
    }

};

export default Upcoming;