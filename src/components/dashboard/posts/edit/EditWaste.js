import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Loading from '../../../UI/loading/Loading.js';

import {FcCheckmark} from 'react-icons/fc';
import { BsBell, BsPerson } from 'react-icons/bs';
import { fetchPickUpById, updatePost, fetchAvailById } from '../../../../store/actions/index.js';

const EditWaste = props => {
    const {users, availbyid, pickup} = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);

    let type = {}

    if(window.location.href.indexOf("available") > -1) {
        type = {type: 'available'};
    } else if (window.location.href.indexOf("pickup") > -1){
        type = {type :'pick_up'};
    };



    const [editPickUp, setEditPickUp] = useState(!pickup.currentPickUp.data? null :
        {
            "address": pickup.currentPickUp.data[0].address,
            "date_posted": pickup.currentPickUp.data[0].date_posted,
            "exp": pickup.currentPickUp.data[0].exp,
            "id": pickup.currentPickUp.data[0].id,
            "items": pickup.currentPickUp.data[0].items,
            "pick_up_date": pickup.currentPickUp.data[0].pick_up_date,
            "price": pickup.currentPickUp.data[0].price,
            "producer_id":pickup.currentPickUp.data[0].producer_id,
            "time_available": pickup.currentPickUp.data[0].time_available,
            "transformer_id": pickup.currentPickUp.data[0].transformer_id,
            "type": pickup.currentPickUp.data[0].type
        }

    );

    const [editAvail, setEditAvail] = useState(!availbyid.currentAvail.data? null :
        {
            "address":availbyid.currentAvail.data[0][0].address,
            "date_posted": availbyid.currentAvail.data[0][0].date_posted,
            "exp": availbyid.currentAvail.data[0][0].exp,
            "id": availbyid.currentAvail.data[0][0].id,
            "items":availbyid.currentAvail.data[0][0].items,
            "price":availbyid.currentAvail.data[0][0].price,
            "producer_id":availbyid.currentAvail.data[0][0].producer_id,
            "time_available": availbyid.currentAvail.data[0][0].time_available,
            "type": availbyid.currentAvail.data[0][0].type,
        }
    )




    const handleChange = e => {
        if(type.type === 'pick_up'){
            setEditPickUp({
                ...editPickUp,
                [e.currentTarget.name]: e.currentTarget.value
            })
        } else if(type.type === 'available'){
            setEditAvail({
                ...editAvail,
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    };

    const handleEdit = e => {    
        if(type.type === 'pick_up'){
            const id = {id :pickup.currentPickUp.data[0].id}
            dispatch(updatePost({...id, ...type, editPickUp}))
            .then(()=>{
                dispatch(fetchPickUpById({id: pickup.currentPickUp.data[0].id}))

            })
            .then(()=>{
                history.push('/pickup/view')
            })
        } else if(type.type === 'available'){
            const id = {id :availbyid.currentAvail.data[0][0].id}

            dispatch(updatePost({...id, ...type, editAvail}))
            .then(()=>{
                dispatch(fetchAvailById({producer_id: id.id}))
            })
            .then(()=> {
                history.push('/available/schedule')
            })


        }    
    };

    if(!users.userData.userdata){
        return <Loading />
    } else {
        if(type.type === 'pick_up'){
            if(!pickup.currentPickUp.data){
                <Loading/>
            } else {
                return(
                    <div id="pickup-book-cont">
                        <div id="welcome-header-container">
                            <div id="welcome-header-text">
                            </div>
                            <div id="welcome-header-alerts">
                                <BsBell className="clickable" size="1.1em" />
                                <BsPerson className="clickable" size="1.7em"  />
                            </div>
                        </div>
                        <div id="pickup-header-cont">
                            <span id="pickup-book-header">Edit Post</span>
                        </div>

                        <div id="pickup-content-cont">
                            <div id="pickup-book-confirm">
                            </div>
                            <div id="pickup-book-tbl">
                                <div id="pickup-info-tbl">
                                    <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                        <span style={{fontSize: "1.5em"}}>{users.userData.userdata.company_name}</span>
                                    </div>
                                    
                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                                        <select 
                                        className="add-waste-form" 
                                        name="time_available" 
                                        value={editPickUp.time_available} 
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
                                        <span style={{fontSize:".7em"}}>EXPIRATION</span>
                                        <input type="date"
                                        name="exp"
                                        className="add-waste-form" 
                                        value={editPickUp.exp}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>TYPE</span>
                                        <input 
                                        name="type"
                                        className="add-waste-form" 
                                        onChange={handleChange}
                                        value={editPickUp.type}
                                        />
                                    </div>
                            
                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>ITEMS</span>
                                        <input 
                                        className="add-waste-form"
                                        name="items"
                                        onChange={handleChange}
                                        value={editPickUp.items}
                                        />
                                    </div>

                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>PRICE</span>
                                        <input 
                                        className="add-waste-form"
                                        name="price"
                                        value={editPickUp.price}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="pickup-book-btns">
                                <button className="pickup-book-btns" onClick={()=>{
                                    history.push('/home')
                                }}>Cancel Edit</button>
                                <button 
                                className="pickup-book-btns" 
                                style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                                onClick={()=>{
                                    handleEdit()
                                }}
                                >
                                Confirm Edit
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        } else if(type.type === 'available'){
            if(!availbyid.currentAvail.data){
                <Loading/>
            } else {
                return(
                    <div id="pickup-book-cont">
                        <div id="welcome-header-container">
                            <div id="welcome-header-text">
                            </div>
                            <div id="welcome-header-alerts">
                                <BsBell className="clickable" size="1.1em" />
                                <BsPerson className="clickable" size="1.7em"  />
                            </div>
                        </div>
                        <div id="pickup-header-cont">
                            <span id="pickup-book-header">Edit Post</span>
                        </div>

                        <div id="pickup-content-cont">
                            <div id="pickup-book-confirm">
                            </div>
                            <div id="pickup-book-tbl">
                                <div id="pickup-info-tbl">
                                    <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                                        <span style={{fontSize: "1.5em"}}>{users.userData.userdata.company_name}</span>
                                    </div>
                                    
                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                                        <select 
                                        className="add-waste-form" 
                                        name="time_available" 
                                        value={editAvail.time_available} 
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
                                        <span style={{fontSize:".7em"}}>EXPIRATION</span>
                                        <input type="date"
                                        name="exp"
                                        className="add-waste-form" 
                                        value={editAvail.exp}
                                        onChange={handleChange}
                                        />
                                    </div>

                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>TYPE</span>
                                        <input 
                                        name="type"
                                        className="add-waste-form" 
                                        onChange={handleChange}
                                        value={editAvail.type}
                                        />
                                    </div>
                            
                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>ITEMS</span>
                                        <input 
                                        className="add-waste-form"
                                        name="items"
                                        onChange={handleChange}
                                        value={editAvail.items}
                                        />
                                    </div>

                                    <div className="pickup-info-container">
                                        <span style={{fontSize:".7em"}}>PRICE</span>
                                        <input 
                                        className="add-waste-form"
                                        name="price"
                                        value={editAvail.price}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div id="pickup-book-btns">
                                <button className="pickup-book-btns" onClick={()=>{
                                    history.push('/home')
                                }}>Cancel Edit</button>
                                <button 
                                className="pickup-book-btns" 
                                style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                                onClick={()=>{
                                    handleEdit()
                                }}
                                >
                                Confirm Edit
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
};

export default EditWaste