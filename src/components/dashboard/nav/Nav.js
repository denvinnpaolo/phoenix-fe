import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { BiHome, BiCalendar, BiLogOutCircle } from 'react-icons/bi';
import { FiSettings, FiMail } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa'
import { BsQuestionDiamond } from 'react-icons/bs';

import { useDarkMode } from '../../../hooks/DarkMode.js'
import { unfetchUser } from '../../../store/actions/index.js'
import Loading from '../../UI/loading/Loading.js'

import Ouro from '../../../assets/img/Ouro.png'

const Nav = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    let userData =useSelector(state => state.users.userData)

    const [darkMode, setDarkMode] = useDarkMode(true);
    

    if(userData.userdata === undefined) {
        let token = window.localStorage.getItem('token');
        userData={
            userdata:jwt_decode(token)
        };
    }

    const toggleMode = e => {
        // e.preventDefault();
        setDarkMode(!darkMode);
      };

    const [expand, setExpand] = useState({
        state: false,
        home: true,
        cal: false,
        contacts: false,
        mail: false,
        questions: false,
        settings: false
    });
    
    const activeNav = (e) => {
        var navLi = expand[e.currentTarget.id]
        if(expand[e.currentTarget.id] === true) {
            setExpand({ state: false, [e.currentTarget.id]: !navLi  });
        } else {
            setExpand({ state: true, [e.currentTarget.id]: !navLi  });
        }
    };

    const logOut = e => {
        dispatch(unfetchUser())
        history.push('/')
    }
    if(!userData.userdata){
        return <Loading />
    } else {
        return (
            <div id="dash-nav-container">
                <div id="side-nav">
                    <div id="top">
                        <Link to="/" style={{textDecoration: "none"}}><img className="nav-ouro-img" src={Ouro} /></Link>
                    </div>

                    <div id="mid">
                        <div name={"home"} id={"home"} onClick={activeNav} className={`icons clickable ${expand.home? "active": null}`}>
                            <BiHome className="nav-icons" color="white" size="1.8em" />
                        </div>

                        <div name={"cal"} id={"cal"} onClick={activeNav} className={`icons clickable ${expand.cal? "active": null}`}>
                            <BiCalendar className="nav-icons" color="white" size="1.8em"/>
                        </div>

                        <div name={"contacts"} id={"contacts"} onClick={activeNav} className={`icons clickable ${expand.contacts? "active": null}`}>
                            <FaRegAddressBook className="nav-icons" color="white" size="1.8em"/>
                        </div>

                        <div name={"mail"} id={"mail"} onClick={activeNav} className={`icons clickable ${expand.mail? "active": null}`}>
                            <FiMail className="nav-icons" color="white" size="1.8em"/>
                        </div>

                    </div>

                    <div id="btm">
                        <div name={"questions"} id={"questions"} onClick={activeNav} className={`btm-icons clickable ${expand.questions? "active": null}`}>
                            <BsQuestionDiamond className="nav-icons" color="white" size="1.8em"/>
                        </div>

                        <div name={"settings"} id={"settings"} onClick={activeNav} className={`btm-icons clickable ${expand.settings? "active": null}`}>
                            <FiSettings className="nav-icons" color="white" size="1.8em"/>
                        </div>

                        <div onClick={logOut} className={`btm-icons clickable`}>
                            <BiLogOutCircle className="nav-icons" color="white" size="1.8em"/>
                        </div>
                    </div>
                </div>
                <div id="expanded">
                <div id="nav-inner-top">
                </div>
                <div id="nav-inner-mid">
                {expand.home?
                    <div style={{textDecoration: "none", height:"52%"}} id="nav-inner-home">
                        <Link to="/home" style={{textDecoration: "none"}} className="nav-inner-btns">Home</Link>
                        <Link to="/dashboard/about" style={{textDecoration: "none"}} className="nav-inner-btns">About</Link>
                        <Link to="/contact" style={{textDecoration: "none"}} className="nav-inner-btns">Contact</Link>
                        <Link to="/archives" style={{textDecoration: "none"}} className="nav-inner-btns">Archive</Link>

                    </div>
                    :
                    <div id="nav-inner-home"></div>
                }
                {expand.cal?
                    userData.userdata.type==='wt'?
                            <div id="nav-inner-requests" style={{height: "52%"}}>
                                <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Requests</div></Link>
                                <Link to="/available/schedule/" style={{textDecoration: "none"}}><div className="nav-inner-btns">Schedule</div></Link>
                                <Link to="/available/calendar" style={{textDecoration: "none"}}><div className="nav-inner-btns">Calendar</div></Link>
                                <Link to="/available/calendar" style={{textDecoration: "none"}}><div className="nav-inner-btns">Map</div></Link>


                            </div>
                            :
                            <div id="nav-inner-requests" style={{height: "39%"}}>
                                <Link to="/available/add" style={{textDecoration: "none"}}><div className="nav-inner-btns">Add Waste</div></Link>
                                <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">View Posts</div></Link>
                                <Link to="/available/calendar" style={{textDecoration: "none"}}><div className="nav-inner-btns">Calendar</div></Link>

                            </div>
                    :
                    <div id="nav-inner-home"></div>
                }
                {expand.contacts?
                    userData.userdata.type==='wt'?
                        <div id="nav-inner-requests" style={{height: "39%"}}>
                            <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Search Produce</div></Link>
                            <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Search Producer</div></Link>
                            <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Recents</div></Link>

                        </div>
                        :
                        <div id="nav-inner-requests" style={{height: "26%"}}>
                            <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns" id="nav-inner-searchTI">Search Transformer</div></Link>
                            <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Recents</div></Link>

                        </div>
                    :
                    <div id="nav-inner-home"></div>

                }
                {expand.mail?
                <div id="nav-inner-requests" style={{height: "26%"}} >
                    <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Inbox</div></Link>
                    <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Trash</div></Link>
                </div>
                :
                <div id="nav-inner-home"></div>

                }

                    </div>
                    <div id="nav-inner-btm">
                        <div className="dark-mode__toggle">
                            <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}/>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Nav;


// ICON TO OPEN/ CLOSE THE NAVIGATION
// <div class="icons">
// { expand.state? <BsBoxArrowLeft color="white" size="1.3em" onClick={handleExpand} />
//  :<BsBoxArrowRight color="white" size="1.3em" onClick={handleExpand} /> }
// </div>