import React from 'react';
import { BsBell, BsPerson } from 'react-icons/bs';

import { useSelector } from 'react-redux';
import Loading from '../../UI/loading/Loading';

const Settings = () => {

    const userData  = useSelector(state => state.users.userData)
    if(!userData.userdata){
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
                            <span>Settings</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Settings