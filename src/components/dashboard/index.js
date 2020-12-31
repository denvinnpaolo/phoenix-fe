import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './nav/Nav.js'
import Home from './home/Home.js'
import AllRequest from './requests/all/AllRequest.js'
import PickupBook from './schedule/pickupBook/PickupBook.js'
import MultiPickup from './schedule/multiPickup/MultiPickup.js'
import Calendar from './calendar/Calendar.js';
import AddWaste from './posts/add/AddWaste.js';
import Contact from '../landing/website/contact/Contact.js'
import ViewPickUp from './posts/view/ViewPickUp.js'
import EditWaste from './posts/edit/EditWaste.js';
import Archive from './archive/Archive.js';
import About from './about/About.js'



const Dashboard = () => {
 
    return(
        <div id='dashboard-container'>
            <Nav />
            <Route path="/home" render={()=> <Home />}/>
            <Route exact path="/" render={()=> <Home />}/>
            <Route path='/dashboard/about' render={()=> <About />} />

            <Route path="/contact" component={Contact} />
            <Route path="/available/request/all" render={()=><AllRequest />} />
            <Route exact path="/available/schedule" render={()=><PickupBook /> } />
            <Route exact path="/pickup/view" render={()=><ViewPickUp/> } />
            <Route path="/available/schedule/multi" render={()=><MultiPickup/> } />
            <Route path="/available/calendar" render={()=><Calendar /> } />
            <Route path="/available/add" render={()=><AddWaste />} />
            <Route path="/post/edit/pickup" render={()=><EditWaste />}/>
            <Route path="/post/edit/available" render={()=><EditWaste />}/>
            <Route path="/archives" render={()=> <Archive />}/>


        </div>
    )
}

export default Dashboard;
