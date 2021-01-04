import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';

import {BsPerson, BsBell} from 'react-icons/bs';
import { FcCheckmark } from 'react-icons/fc'

import { createPickup } from '../../../../store/actions/index.js'
import Loading from '../../../UI/loading/Loading';

const PickupBook = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [confirm, setConfirm] = useState(false);
    const {availbyid, users} = useSelector(state => state);

    const [newPickUp, setNewPickUp] = useState(!availbyid.currentAvail.data? null :{
            "id": availbyid.currentAvail.data[0][0].id,
            "date_posted": availbyid.currentAvail.data[0][0].date_posted,
            "exp": availbyid.currentAvail.data[0][0].exp,
            "pick_up_date": availbyid.currentAvail.data[0][0].exp,
            "time_available": availbyid.currentAvail.data[0][0].time_available,
            "type": availbyid.currentAvail.data[0][0].type,
            "items": availbyid.currentAvail.data[0][0].items,
            "address": availbyid.currentAvail.data[0][0].address,
            "price": availbyid.currentAvail.data[0][0].price,
            "producer_id": availbyid.currentAvail.data[0][0].producer_id,
            "transformer_id": users.userData.userdata.id

    });

    const handlePickup = e => {
        setNewPickUp(!e? null :{
            "id": e.id,
            "date_posted": e.date_posted,
            "exp": availbyid.currentAvail.data[0][0].exp,
            "pick_up_date": e.exp,
            "time_available": e.time_available,
            "type": e.type,
            "items": e.items,
            "address": e.address,
            "price":e.price,
            "producer_id": e.producer_id,
            "transformer_id": users.userData.userdata.id
        });

        if(newPickUp === null){
            return null
        } else {
            dispatch(createPickup(newPickUp))
            setConfirm(!confirm)
        }
    };

    if(!availbyid.currentAvail.data){
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
                    <span id="pickup-book-header">Book Pick-up</span>
                </div>

                <div id="pickup-content-cont">
                    <div id="pickup-book-confirm">
                        {confirm? <span id="check"><FcCheckmark size="2.2em" />  Your pick-up has been successfully booked</span> : null }
                    </div>
                    <div id="pickup-book-tbl">
                        <div id="pickup-info-tbl">
                            <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                <span style={{fontSize: "1.5em"}}>{availbyid.currentAvail.data[0][0].company_name}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span className="book-field-res" style={{fontSize:".7em"}}>TIME OF DAY</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{availbyid.currentAvail.data[0][0].time_available}</span>
                            </div>  
                            <div className="pickup-info-container">
                                <span className="book-field-res" style={{fontSize:".7em"}}>DATE</span>
                                <span className="book-info">{Moment(availbyid.currentAvail.data[0][0].exp).format("MMMM DD, YYYY")}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span className="book-field-res" style={{fontSize:".7em"}}>TYPE</span>
                                <span className="book-info">{availbyid.currentAvail.data[0][0].type}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span className="book-field-res" style={{fontSize:".7em"}}>ITEMS</span>
                                <span className="book-info">{availbyid.currentAvail.data[0][0].items}</span>
                            </div>
                            <div className="pickup-info-container">
                                <span className="book-field-res" style={{fontSize:".7em"}}>PRICE</span>
                                <span className="book-info" style={{textTransform: 'capitalize'}}>{availbyid.currentAvail.data[0][0].price}</span>
                            </div>
                            {users.userData.userdata.type === 'wt'?
                                <div className="pickup-info-container">
                                    <span className="book-field-res" style={{fontSize:".7em"}}>CONTACT</span>
                                    <span className="book-info" style={{textTransform: 'capitalize'}}>{`${availbyid.currentAvail.data[0][0].name}`}</span>
                                </div>
                                :
                                null
                            }
                            {users.userData.userdata.type === 'wt'?
                                <div className="pickup-info-container">
                                    <span className="book-field-res" style={{fontSize:".7em"}}>ADDRESS</span>
                                    <span className="book-info">{availbyid.currentAvail.data[0][0].address}</span>
                                </div>
                                : 
                                null
                            }
                            {users.userData.userdata.type === 'wt'?
                                <div className="pickup-info-container">
                                    <span className="book-field-res" style={{fontSize:".7em"}}>PHONE NUMBER</span>
                                    <span className="book-info">{availbyid.currentAvail.data[0][0].phone}</span>
                                </div>
                                :
                                null
                            }
                            
                        </div>
                    </div>
                    {users.userData.userdata.type ==='wt'?
                        <div id="pickup-book-btns">
                        <button className="pickup-book-btns" onClick={()=>{
                            history.push('/available/request/all')
                        }}>Back</button>

                        {!confirm? <button 
                          className="pickup-book-btns" 
                          style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                          onClick={()=>{
                            handlePickup(availbyid.currentAvail.data[0][0])
                        }}
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
                        </button>
                        }
                    </div>
                    :
                    <div id="pickup-book-btns">
                        <button className="pickup-book-btns" onClick={()=>{
                            history.push('/available/request/all')
                        }}>Back</button>

                        <button 
                          className="pickup-book-btns" 
                          style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                          onClick={()=>{
                            history.push('/post/edit/available')
                        }}
                        >
                            Edit Post
                        </button>
                        
                    </div>
                    }
                </div>
            </div>
        )
    }
};

export default PickupBook;