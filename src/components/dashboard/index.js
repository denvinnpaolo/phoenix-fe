import React from 'react';
import {useSelector} from 'react-redux';
import Nav from './nav/Nav.js'

const Dashboard = props => {
    // const { loggedIn } = useSelector(state => state.user);

    return(
        <div id='dashboard-container'>
            <Nav />
        </div>
    )

}

export default Dashboard;