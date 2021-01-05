import React, { useState } from 'react';
import { BsBell, BsPerson } from 'react-icons/bs';
import InfiniteScroll from "react-infinite-scroll-component";
import {getCode, getName} from 'country-list';

import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../UI/loading/Loading';
import { useHistory } from 'react-router-dom';

import {updateUser} from '../../../store/actions/index.js';

const Settings = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {userData} = useSelector(state => state.users)

    const [user, setUser] = useState(!userData.userdata? null :
            {
                address: userData.userdata.address,
                city: userData.userdata.city,
                company_name: userData.userdata.company_name,
                company_size: userData.userdata.company_size,
                country: userData.userdata.country,
                email: userData.userdata.email,
                id: userData.userdata.id,
                name: userData.userdata.name,
                phone: userData.userdata.phone,
                state: userData.userdata.state,
                type: userData.userdata.type,
                website: userData.userdata.website
            }
    );

    const handleChange = e => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }


    const handleSubmit = e => {
        dispatch(updateUser(user))
        .then(()=> history.push('/'))
    }

    if(!userData.userdata && !user){
        return <Loading />
    } else {
        return(
            <div id="dash-settings-cont">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{`${userData.userdata.company_name.toUpperCase()}`}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell className="clickable clickable-icons-res" size="1.1em" />
                        <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                    </div>
                </div>
                <div id="settings-content-container">
                    <div id="settings-content-header">
                        <div id="settings-header-text">
                            <span id="dash-component-header">Settings</span>
                        </div>
                    </div>
                    <div id="settings-content-main">
                        <InfiniteScroll
                            dataLength={10}
                          style={{width: "100%", height: "100%"}}
                          scrollableTarget="settings-content-main"
                        >   
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Company Name:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="company_name"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.company_name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Company Size:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="company_size"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.company_size}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Website:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="website"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.website}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Company Representative:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="name"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Email:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="email"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Password:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont" style={{justifyContent: "flex-start"}}>
                                        <button>Change Password</button>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Phone:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="phone"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.phone}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Country:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                        name="country"
                                        onChange={handleChange}
                                        className="settings-input"
                                        value={user.country}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>Address:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                          address="address"
                                          onChange={handleChange}
                                          className="settings-input"
                                          value={user.address}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>City:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                          name="city"
                                          onChange={handleChange}
                                          className="settings-input"
                                          value={user.city}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows">
                                <div className="settings-content-labels">
                                    <span>State/Province:</span>
                                </div>
                                <div className="settings-content-inputs">
                                    <div className="settings-input-cont">
                                        <input
                                          name="state"
                                          onChange={handleChange}
                                          className="settings-input"
                                          value={user.state}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="settings-content-rows" style={{height: "20%"}}>
                                
                                <div id="settings-btns-cont">
                                    <div id="settings-content-btns">
                                    <button 
                                      className="pickup-book-btns"
                                      onClick={()=>{
                                          history.push('/')
                                      }}
                                    >
                                        Back
                                    </button>
                                    <button 
                                      onClick={handleSubmit}
                                      className="pickup-book-btns"
                                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                                    >Submit</button>
                                    </div>
                                </div>
                            </div>
                            


                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        )
    }
};

export default Settings