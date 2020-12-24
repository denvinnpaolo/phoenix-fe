import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';

import Loading from '../.././../UI/loading/Loading.js'
import InfiniteScroll from 'react-infinite-scroll-component';
import { BiEdit } from 'react-icons/bi'

import { fetchAvailable, fetchAvailById } from '../../../../store/actions/index.js';
import { useHistory } from 'react-router-dom';


const NewRequest = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    let multiWastes = props.multiWastes

    const { available, canceled, users } = useSelector(state => state)


    useEffect(() => {
        dispatch(fetchAvailable())
    },[dispatch, canceled.newCanceled]);

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

    if(!available.availableData.data && !users.userData.type ){
        return <Loading />
    } else {
        if(users.userData.type === 'wt'){
            return(
                <div id="pickup-overview-tbl">
                    <div id="allreq-data-labels">
                            <span className="allreq-data-overview">Expiration</span>
                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                            <span className="allreq-data-overview">Time Available</span>
                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                            <span className="allreq-data-overview" >Address</span>
                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                            <span className="allreq-data-overview" >items</span>
                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                            <span className="allreq-data-overview" >Type of Waste</span>
                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                            <span className="allreq-data-overview">Pick-up Selection</span>
                    </div>

                    {!available.availableData.data? 
                        <Loading />
                        :
                        <InfiniteScroll
                            dataLength={available.availableData.data.length}
                            style={{width: "100%", height: "100%"}}
                            scrollableTarget="pickup-overview-tbl"
                        >
                            {available.availableData.data.map(item=>{
                                return( 
                                    <div className="overview-datarow" onDoubleClick={()=> {
                                        handleDBClick(item.id)
                                    }}>
                                        <span className="allreq-data">{Moment(item.exp).format('MMM. DD, YYYY')}</span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                        <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                        <span className="allreq-data">{`${item.address.split(",")[1]} ${item.address.split(",")[2]}`}</span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                        <span className="allreq-data">{item.items}</span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                        
                                        <span className="allreq-data">Waste</span>
                                        <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                        
                                        <span className="allreq-data" >{<input  type="checkbox" onClick={()=> handleCheck({id: item.id})}/>} </span>


                                    </div>
                                )
                            })
                        }
                        </InfiniteScroll>
                        }
                </div>
            )
    } else {
        return(
            <div id="pickup-overview-tbl">
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
                        dataLength={available.availableData.data.length}
                        style={{width: "100%", height: "100%"}}
                        scrollableTarget="pickup-overview-tbl"
                    >
                        {available.availableData.data.map(item=>{
                            return( 
                                <div className="overview-datarow" onDoubleClick={()=> {
                                    handleDBClick(item.id)
                                }}>
                                    <span className="allreq-data" style={{fontSize: ".8em"}}>{Moment(item.exp).format('MMM. DD, YYYY')}</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                    
                                    <span className="allreq-data" style={{textTransform: 'capitalize'}}>{item.time_available}</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data">{item.items}</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data">Y</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                    
                                    <span className="allreq-data">{`${item.address.split(",")[1]} ${item.address.split(",")[2]}`}</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                
                                    
                                    <span className="allreq-data">818 818 8181</span>
                                    
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5) ", height: "100%"}}></div>
                                    <span className="allreq-data"><BiEdit /> Edit  </span>

    
                                </div>
                            )
                        })
                    }
                    </InfiniteScroll>
                    }
            </div>
        )
    }}
};

export default NewRequest;