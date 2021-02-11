import React, { useState } from 'react';
import Geocode from "react-geocode";
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchAvailable, fetchAvailById, fetchMultiAvail, viewPostedById, fetchPickUpById } from '../../../store/actions/index.js';



import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';
import { BsPlus } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Loading from '../../UI/loading/Loading.js'


const MapComponent = () => {
    Geocode.setLanguage("en");
    Geocode.enableDebug();
    const dispatch = useDispatch();
    const history = useHistory();
    const { available, users, view } = useSelector(state => state);

    const [order, setOrder] = useState(true);

    let multiWastes = {}


    const handleDBClick = item => {
        if(!item.transformer_id){
            if(users.userData.userdata.type==='wt'){
                dispatch(fetchAvailById({id: item.id}))
            } else if(users.userData.userdata.type === 'wp'){
                dispatch(fetchAvailById({producer_id: item.id}))
            }
            history.push('/available/schedule')
        } else {

            if(users.userData.userdata.type==='wt'){
                dispatch(fetchPickUpById({id: item.id}))
            } else if(users.userData.userdata.type === 'wp'){
                dispatch(fetchPickUpById({id: item.id}))
            }
            history.push('/pickup/view')
        }
    };

    const handleSchedule = () => {
 
        dispatch(fetchMultiAvail(multiWastes))
        history.push('/available/schedule/multi')
    };

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));

    if(!available.availableData.data ){
        return <Loading /> 

    } else {
        return(
            <div id="all-req-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{users.userData.userdata.company_name.toUpperCase()}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell className="clickable clickable-icons-res" size="1.1em" />
                        <BsPerson className="clickable clickable-icons-res" size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container">
                        <span id="allreq-component-header">Pick up Request</span>
                    </div>
                    <div id="allreq-sort-cont">
                        <div id="allreq-sort-btns">
                            <BsFunnelFill size="1.6em"/>
                            <RiArrowUpDownFill 
                            onClick={()=>{setOrder(!order)}} 
                            size="1.5em" 
                            className="clickable"
                            />
                        </div>
                        <div id="allreq-sort-search">
                            <BsSearch size="1.4em" />
                        </div>
                    </div>
                    <div id="allreq-tbl-cont" >
                        <div id="allreq-tbl-div">
                            <div id="allreq-tbl-map">
                                <div id="allreq-list-address">
                                <div id="allreq-data-labels" className="clickable">
                                    <span className="allreq-data-map" style={{fontSize: ".9em", fontWeight: "bold"}}>Address</span>
                                    <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>

                                    <span className="allreq-data-map" style={{fontSize: ".9em", fontWeight: "bold"}}>Pick-up Selection</span>


                                </div>
                                {!available.availableData.data? 
                                <Loading />
                                :
                                <InfiniteScroll
                                    dataLength={available.availableData.data.length}
                                    style={{width: "100%", height: "100%"}}
                                    scrollableTarget="allreq-tbl-map"
                                >
                                    {available.availableData.data
                                        .sort((a,b) => order? Moment(a.exp).diff(Moment(b.exp)): Moment(b.exp).diff(Moment(a.exp)))
                                        .map(item=>{
                                        return( 
                                            <div id="allreq-data-row" onDoubleClick={()=> {
                                                handleDBClick(item)
                                            }}>
                                                <span className="allreq-data-map">{item.address.split(',')[0]}</span>
                                                <div style={{borderRight: "1px solid rgb(190, 184, 184, 0.5)", height: "100%"}}></div>
                                                
                                                <span className="allreq-data-map" style={{textTransform: 'capitalize'}}>{Moment(item.exp).format('MMM DD')}</span>


                                            </div>
                                        )
                                    })
                                }
                                </InfiniteScroll>
                                
                                }
                                </div>
                                <GoogleMapExample
                                    containerElement={ <div style={{ height: `100%`, width: '100%', display:"flex", justifyContent:"center", alignItems:"center" }} /> }
                                    mapElement={ <div style={{ height: `90%`, width: "90%" }} /> }
                                />
                            </div>
                            <div id="allreq-tbl-btns">
                                    <div id="allreq-btm-btns">
                                        <button className="allreq-btn allreq-btn-res">List view</button>
                                        <button className="allreq-btn allreq-btn-res" style={{backgroundColor: "#FF9B64"}} onClick={handleSchedule}>Schedule</button>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MapComponent;