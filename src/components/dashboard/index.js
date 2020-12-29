import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import PickupBook from './schedule/pickupBook/PickupBook.js'
import MultiPickup from './schedule/multiPickup/MultiPickup.js'
import Calendar from './calendar/Calendar.js';
import AddWaste from './requests/add/AddWaste.js';
import About from '../landing/website/about/About.js';
import Contact from '../landing/website/contact/Contact.js'




const Dashboard = props => {
 
    return(
        <div id='dashboard-container'>
            <Nav />
            <Route path="/home" render={()=> <Home />}/>
            <Route exact path="/" render={()=> <Home />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/available/request/all" render={()=><AllRequest />} />
            <Route exact path="/available/schedule" render={()=><PickupBook /> } />
            <Route path="/available/schedule/multi" render={()=><MultiPickup/> } />
            <Route path="/available/calendar" render={()=><Calendar /> } />
            <Route path="/available/add" render={()=><AddWaste />} />


        </div>
    )
}

export default Dashboard;
