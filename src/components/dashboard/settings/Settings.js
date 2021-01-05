import React from 'react';

import { useSelector } from 'react-redux';
import Loading from '../../UI/loading/Loading';

const Settings = () => {

    const { userdata } = useSelector(state => state.userData)
    if(!userdata){
        return <Loading />
    } else {
        return(
            <div id="dash-settings-cont"></div>
        )
    }
};

export default Settings