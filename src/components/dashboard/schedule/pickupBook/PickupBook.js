import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BsPerson, BsBell} from 'react-icons/bs';

import Loading from '../../../UI/Loading';
import { useHistory } from 'react-router-dom';

const PickupBook = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {availbyid, users} = useSelector(state => state);

    let userInfo = users.userData


    if(!availbyid.currentAvail.data){
        return <Loading />
    }
    return(
        <div id="pickup-book-cont">
            <div id="welcome-header-container">
                <div id="welcome-header-text">
                    <span id="welcome-header">{`Welcome back, ${userInfo.name.toUpperCase()}`}</span>
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
                <div id="pickup-book-tbl">
                    {availbyid.currentAvail.data.address}
                </div>
                <div id="pickup-book-btns">
                    <button className="pickup-book-btns" onClick={()=>{
                        history.push('/available/request/all')
                    }}>Back</button>
                    <button className="pickup-book-btns" style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}>Confirm Pick Up</button></div>
            </div>
        </div>
    )
};

export default PickupBook;