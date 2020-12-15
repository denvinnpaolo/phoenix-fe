import React from 'react';

import { useSelector } from 'react-redux';

const Settings = () => {

    const { userdata } = useSelector(state => state.userData) 
    return(
        <div></div>
    )
};

export default Settings