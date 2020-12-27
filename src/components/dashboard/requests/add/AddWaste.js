import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Moment from 'moment';

import {FcCheckmark} from 'react-icons/fc';
import { BsBell, BsPerson } from 'react-icons/bs';

const AddWaste = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false)

    const [newPickUp, setNewPickUp] = useState({
        "date_posted":"",
        "exp": "",
        "time_available": "",
        "type": "",
        "items": "",
        "address":"",
        "description": "",
        "producer_id":""
    });

    const handleAdd = () => {

    };


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
                <span id="pickup-book-header">Add Waste</span>
            </div>

            <div id="pickup-content-cont">
                <div id="pickup-book-confirm">
                    {confirm? <span id="check"><FcCheckmark size="2.2em" />Success!</span> : null }
                </div>
                <div id="pickup-book-tbl">
                    <div id="pickup-info-tbl">
                        <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                            <input style={{fontSize: "1.5em"}}/>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>DATE</span>
                            <input className="book-info"/>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                            <input className="book-info" />
                        </div>                        
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>ITEMS</span>
                            <input className="book-info"/>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>TYPE</span>
                            <input className="book-info" />
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>ADDRESS</span>
                            <input className="book-info" />
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>PHONE NUMBER</span>
                            <input className="book-info"/>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>CONTACT</span>
                            <input className="book-info" />
                        </div>
                    </div>
                </div>
                <div id="pickup-book-btns">
                    <button className="pickup-book-btns" onClick={()=>{
                        history.push('/available/request/all')
                    }}>Back</button>
                    {!confirm? <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=>{
                          handleAdd()
                      }}
                    >
                        Confirm Pick Up
                    </button>
                    :
                    <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=> history.push('/available/add')}
                    >
                        Add more
                    </button>}
                    </div>
            </div>
        </div>
    )
};

export default AddWaste