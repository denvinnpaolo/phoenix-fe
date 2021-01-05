import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";
import { BiCalendarMinus } from 'react-icons/bi';

import {fetchCanceledByTI} from'../../../store/actions/index.js';
import Loading from '../../UI/loading/Loading.js';
import DataModal from '../modal/Modal.js'

const Canceled = props => {
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    const { canceled, archive } = useSelector(state => state);
    const {type, id}= useSelector(state => state.users.userData.userdata);

    const [itemInfo, setItemInfo] = useState(canceled.canceledData.data? canceled.canceledData.data[0]: null);


    useEffect(() => {
        if(type === 'wt'){
            dispatch(fetchCanceledByTI({transformer_id: id}))
        } else if(type === 'wp'){
            dispatch(fetchCanceledByTI({producer_id: id}))
        }
    },[dispatch, canceled.newCanceled, archive.archiveData ])


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
                        <span >Canceled</span>
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
                                canceled.canceledData.data
                                .sort((a,b) => Moment(a.exp).diff(Moment(b.exp)))
                                .filter(a => {
                                    if(props.sort.today){
                                        return new Date(Moment(a.exp).add(0, 'days')) === new Date() 
                                    } else if(props.sort.week){
                                        return new Date(a.exp) - new Date(Moment().subtract(7, 'days')) > 0
                                    } else if(props.sort.month){
                                        return new Date(Moment(a.exp).add(15, 'days')) - new Date(Moment().subtract(15, 'days')) > 0
                                    }
                                })
                                .map((item, i)=> 
                                <div className="overview-data"
                                  onDoubleClick={()=> {
                                      setModalShow(true) 
                                      setItemInfo(item)
                                  }}
                                  key={i}
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
                                    status={'canceled'}
                                    onHide={()=> setModalShow(false)}
                                    upcoming={false}
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

export default Canceled;