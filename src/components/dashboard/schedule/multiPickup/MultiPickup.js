import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import Moment from 'moment';

import {BsPerson, BsBell} from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc'

import { createMultiPickup } from '../../../../store/actions/index.js'
import Loading from '../../../UI/loading/Loading';

const MultiPickup = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {available, users} = useSelector(state => state);

    let userInfo = users.userData

    const [confirm, setConfirm] = useState(false)


    const handleConfirm = (list, TI)=> {
        if(list && TI === null){
            return
        } else {        
            setConfirm(!confirm)
            dispatch(createMultiPickup(list,TI))
        }
    }


    if(!available.multiIdData.data){
        return <Loading />
    }
    return(
        <div id="pickup-book-cont">
            <div id="welcome-header-container">
                <div id="welcome-header-text">
                </div>
                <div id="welcome-header-alerts">
                    <BsBell size="1.1em" />
                    <BsPerson size="1.7em"  />
                </div>
            </div>
            <div id="pickup-header-cont">
                <span id="pickup-book-header">Book Pick-up</span>
            </div>

            <div id="pickup-content-cont">
                <div id="pickup-book-confirm">
                    {confirm? <span id="check"><FcCheckmark size="2.2em" />  Your pick-up has been successfully booked</span> : null }
                </div>
                <div id="multi-pickup-container">
                <InfiniteScroll
                  dataLength={available.multiIdData.data}
                  style={{width: "100%", height: "100%", display: "flex",
                    flexFlow: "row wrap", justifyContent: "space-evenly",
                    alignItems: "center"
                  }}

                  scrollableTarget="multi-pickup-container"
                >{available.multiIdData.data.map(item => {
                    return( 
                        <div id="multi-tbl-container">
                        <div id="multi-pickup-tbl">
                            <div id="pickup-info-tbl">
                            <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                <span style={{fontSize: "1.5em"}}>Company Name</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>DATE</span>
                                <span className="book-info">{Moment(item[0].exp).format("MMMM DD, YYYY")}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{item[0].time_available}</span>
                            </div>                        <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>ITEMS</span>
                                <span className="book-info">{item[0].items}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>TYPE</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{item[0].description}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>ADDRESS</span>
                                <span className="book-info">{item[0].address}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>PHONE NUMBER</span>
                                <span className="book-info">{item[0].phone}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>CONTACT</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{`${item[0].name}`}</span>
                            </div>
                        </div>
                        </div>
                        </div>)
                })}
                </InfiniteScroll>
                </div>
                <div id="pickup-book-btns">
                    <button className="pickup-book-btns" onClick={()=>{
                        history.push('/available/request/all')
                    }}>Back</button>
                    {!confirm? <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=> {handleConfirm(available.multiIdData.data, userInfo.id)}}
                    >
                        Confirm Pick Up
                    </button>
                    :
                    <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=> history.push('/available/request/all')}
                    >
                        Add more
                    </button>}
                    </div>
            </div>
        </div>
    )
};

export default MultiPickup;