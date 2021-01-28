import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import Loading from '../../../UI/loading/Loading.js';

import {FcCheckmark} from 'react-icons/fc';
import { BsBell, BsPerson } from 'react-icons/bs';
import { createNewWaste, fetchUser } from '../../../../store/actions/index.js';

const AddWaste = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);
    const today = new Date
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const userData = useSelector(state => state.users.userData);


    const [newPickUp, setNewPickUp] = useState(!userData.userdata? null: {
        "date_posted": date,
        "price":"",
        "exp": "",
        "time_available": "",
        "type": "",
        "items": "",
        "address":`${userData.userdata.address}, ${userData.userdata.city}, ${userData.userdata.state}, ${userData.userdata.country}`,
        "producer_id":userData.userdata.id
    });

    const handleChange = e => {
        setNewPickUp({
            ...newPickUp,
            [e.currentTarget.name]: e.currentTarget.value
        })
    };

    const handleAdd = e => {
        setNewPickUp(
            !userData.userdata.address? 
            null: 
            {...newPickUp,
            "date_posted": date,
            "address":`${userData.userdata.address}, ${userData.userdata.city}, ${userData.userdata.state}, ${userData.userdata.country}`,
            "producer_id":userData.userdata.id
            }
        );
    
        console.log(userData)
        console.log(newPickUp)
        if(newPickUp === null){
            return null
        } else {
            dispatch(createNewWaste(newPickUp))
            setConfirm(!confirm)
        }    
    };

    if(!userData.userdata){
        return <Loading />
    } else {
        return(
            <div id="pickup-book-cont">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{userData.userdata.company_name.toUpperCase()}</span>

                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell className="clickable clickable-icons-res" size="1.1em" />
                        <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                    </div>
                </div>
                <div id="pickup-header-cont">
                    <span id="pickup-book-header">Add Post</span>
                </div>

                <div id="pickup-content-cont">
                    <div id="pickup-book-confirm">
                        {confirm? <span id="check"><FcCheckmark size="2.2em" />Success!</span> : null }
                    </div>
                    <div id="pickup-book-tbl">
                        <div id="pickup-info-tbl">
                            <div  style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                <span  style={{fontSize: "1.5em"}}>{userData.userdata.company_name}</span>
                            </div>
                            
                            <div className="pickup-info-container">
                                <span className="book-multiinfo-res" style={{fontSize:".7em"}}>TIME OF DAY</span>
                                <select 
                                  className="add-waste-form" 
                                  name="time_available" 
                                  value={newPickUp.time_available} 
                                  onChange={handleChange}
                                >
                                    <option></option>
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                    <option>Anytime</option>
                                </select>
                            </div> 

                            <div className="pickup-info-container">
                                <span className="book-multiinfo-res" style={{fontSize:".7em"}}>EXPIRATION</span>
                                <input type="date"
                                 name="exp"
                                 className="add-waste-form" 
                                 value={newPickUp.exp}
                                 onChange={handleChange}
                                />
                            </div>

                            <div className="pickup-info-container">
                                <span className="book-multiinfo-res" style={{fontSize:".7em"}}>TYPE</span>
                                <input 
                                  name="type"
                                  className="add-waste-form" 
                                  onChange={handleChange}
                                  value={newPickUp.type}
                                />
                            </div>
                       
                            <div className="pickup-info-container">
                                <span className="book-multiinfo-res" style={{fontSize:".7em"}}>ITEMS</span>
                                <input 
                                  className="add-waste-form"
                                  name="items"
                                  onChange={handleChange}
                                  value={newPickUp.items}
                                />
                            </div>

                            <div className="pickup-info-container">
                                <span className="book-multiinfo-res" style={{fontSize:".7em"}}>PRICE</span>
                                <input 
                                  className="add-waste-form"
                                  name="price"
                                  value={newPickUp.price}
                                  onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div id="pickup-book-btns">
                        <button className="pickup-book-btns" onClick={()=>{
                            history.push('/Home')
                        }}>Home</button>
                        {!confirm? 
                        <button 
                          className="pickup-book-btns" 
                          style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                          onClick={()=>{
                            handleAdd()
                          }}
                        >
                            Add Waste
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
    }
};

export default AddWaste