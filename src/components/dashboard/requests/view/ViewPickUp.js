import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Route } from 'react-router-dom';
import Moment from 'moment';

import {BsPerson, BsBell} from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc'

import { createPickup } from '../../../../store/actions/index.js'
import Loading from '../../../UI/loading/Loading';
import EditWaste from '../edit/EditWaste.js'

const ViewPickUp = props => {
    const history = useHistory();
    const {pickup} = useSelector(state => state);


    if(!pickup.currentPickUp.data){
        return <Loading />
    } else {
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
                    <span id="pickup-book-header">Pick-up Details</span>
                </div>

                <div id="pickup-content-cont">
                    <div id="pickup-book-confirm">
                    </div>
                    <div id="pickup-book-tbl">
                        <div id="pickup-info-tbl">
                            <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                <span style={{fontSize: "1.5em"}}>{pickup.currentPickUp.data[0].company_name}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>DATE</span>
                                <span className="book-info">{Moment(pickup.currentPickUp.data[0].exp).format("MMMM DD, YYYY")}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{pickup.currentPickUp.data[0].time_available}</span>
                            </div>                        <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>ITEMS</span>
                                <span className="book-info">{pickup.currentPickUp.data[0].items}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>PRICE</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{pickup.currentPickUp.data[0].price}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>ADDRESS</span>
                                <span className="book-info">{pickup.currentPickUp.data[0].address}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>PHONE NUMBER</span>
                                <span className="book-info">{pickup.currentPickUp.data[0].phone}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span style={{fontSize:".7em"}}>CONTACT</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{`${pickup.currentPickUp.data[0].name}`}</span>
                            </div>
                        </div>
                    </div>
                    <div id="pickup-book-btns">
                        <button className="pickup-book-btns" onClick={()=>{
                            history.push('/')
                        }}>Back</button>

                        <button 
                          className="pickup-book-btns" 
                          style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                          onClick={()=> {
                              history.push('/post/edit/pickup')
                          }}
                        >
                            Edit
                        </button>

                    </div>
                </div>
            </div>
        )
    }
};

export default ViewPickUp;