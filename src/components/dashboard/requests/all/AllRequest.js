import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import { BsBell,BsFunnelFill, BsPerson, BsSearch } from 'react-icons/bs';
import { RiArrowUpDownFill } from 'react-icons/ri';


import { fetchAvailable } from '../../../../store/actions/index.js';

import Loading from '../.././../UI/Loading.js'

const AllRequest = () => {
    const dispatch = useDispatch();
    const { available, users } = useSelector(state => state);

    let userInfo = users.userData

    useEffect(() => {
        dispatch(fetchAvailable())
        console.log(available)
    },[])

    if(!available.availableData.available){
        return <Loading />
    } else {
        return(
            <div id="all-req-container">
                <div id="welcome-header-container">
                    <div id="welcome-header-text">
                        <span id="welcome-header">{`Welcome back, ${userInfo.name.toUpperCase()}`}</span>
                    </div>
                    <div id="welcome-header-alerts">
                        <BsBell size="1.1em" />
                        <BsPerson size="1.7em"  />
                    </div>
                </div>
                <div id="allreq-contents-cont">
                    <div id= "allreq-header-container">
                        <span id="allreq-component-header">Pick up Request</span>
                    </div>
                    <div id="allreq-sort-cont">
                        <div id="allreq-sort-btns">
                            <BsFunnelFill size="1.6em"/>
                            <RiArrowUpDownFill size="1.5em" />
                        </div>
                        <div id="allreq-sort-search">
                            <BsSearch size="1.4em" />
                        </div>
                    </div>
                    <div id="allreq-tbl-cont">
                        <div id="allreq-tbl-div"></div>
                    </div>
                </div>
            </div>
        )
    }
};

export default AllRequest;