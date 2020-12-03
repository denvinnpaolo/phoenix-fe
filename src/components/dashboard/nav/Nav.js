import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { BiHome, BiCalendar, BiLogOut} from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa'
import { BsQuestionDiamond, BsBoxArrowRight, BsBoxArrowLeft, BsPeople } from 'react-icons/bs';

import { unfetchUser } from '../../../store/actions/index.js'
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const [expand, setExpand] = useState({
        state: false,
        home: true,
        cal: false,
        contacts: false,
        meetings: false,
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


    const handleExpand = (e) => {
        if(expand.state === true){
            setExpand({         
                state: false,
                home: false,
                cal: false,
                contacts: false,
                meetings: false,
                questions: false,
                settings: false
            });
        } else {
            setExpand({ ...expand, state: true, home: true });
        }
    };

    const logOut = e => {
        dispatch(unfetchUser())
    }
    
    return (
        <div id="dash-nav-container">
            <div id="side-nav">
                <div id="top">
                    <Link to="/" style={{textDecoration: "none"}}><h1 style={{color:"white", fontSize:"5em"}}>O</h1></Link>

                </div>

                <div id="mid">
                    <div name={"home"} id={"home"} onClick={activeNav} className={`icons ${expand.home? "active": null}`}>
                        <BiHome color="white" size="1.8em"/>
                    </div>

                    <div name={"cal"} id={"cal"} onClick={activeNav} className={`icons ${expand.cal? "active": null}`}>
                        <BiCalendar color="white" size="1.8em"/>
                    </div>

                    <div name={"contacts"} id={"contacts"} onClick={activeNav} className={`icons ${expand.contacts? "active": null}`}>
                        <FaRegAddressBook color="white" size="1.8em"/>
                    </div>

                    <div name={"meetings"} id={"meetings"} onClick={activeNav} className={`icons ${expand.meetings? "active": null}`}>
                        <BsPeople color="white" size="1.8em"/>
                    </div>

                </div>

                <div id="btm">
                    <div name={"questions"} id={"questions"} onClick={activeNav} className={`btm-icons ${expand.questions? "active": null}`}>
                        <BsQuestionDiamond color="white" size="1.8em"/>
                    </div>

                    <div name={"settings"} id={"settings"} onClick={activeNav} className={`btm-icons ${expand.settings? "active": null}`}>
                        <FiSettings color="white" size="1.8em"/>
                    </div>

                    <div onClick={logOut} className={`btm-icons`}>
                        <BiLogOut color="white" size="1.8em"/>
                    </div>
                </div>
            </div>
            <div id="expanded">
            <div id="nav-inner-top">
            </div>
            <div id="nav-inner-mid">
            {expand.home &&
                <Link to="/" style={{textDecoration: "none"}}><div id="nav-inner-home" className="nav-inner-btns" >Home</div></Link>
            }
            {expand.cal &&
                <div id="nav-inner-requests">
                    <Link to="/available/request/all" style={{textDecoration: "none"}}><div className="nav-inner-btns">Pick-up Requests</div></Link>
                    <Link to="/available/schedule/" style={{textDecoration: "none"}}><div className="nav-inner-btns">Schedule</div></Link>
                </div>
            }

                </div>
                <div id="nav-inner-btm"></div>
            </div>
        </div>
    )
};

export default Nav;


// ICON TO OPEN/ CLOSE THE NAVIGATION
// <div class="icons">
// { expand.state? <BsBoxArrowLeft color="white" size="1.3em" onClick={handleExpand} />
//  :<BsBoxArrowRight color="white" size="1.3em" onClick={handleExpand} /> }
// </div>