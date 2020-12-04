import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { BiHome, BiCalendar, BiLogOut } from 'react-icons/bi';
import { FiSettings, FiMail } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa'
import { BsQuestionDiamond } from 'react-icons/bs';

import { unfetchUser } from '../../../store/actions/index.js'

import Ouro from '../../../assets/img/Ouro.png'

const Nav = () => {
    const dispatch = useDispatch();

    const history = useHistory();
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


    // const handleExpand = (e) => {
    //     if(expand.state === true){
    //         setExpand({         
    //             state: false,
    //             home: false,
    //             cal: false,
    //             contacts: false,
    //             mail: false,
    //             questions: false,
    //             settings: false
    //         });
    //     } else {
    //         setExpand({ ...expand, state: true, home: true });
    //     }
    // };

    const logOut = e => {
        dispatch(unfetchUser())
    }
    
    return (
        <div id="dash-nav-container">
            <div id="side-nav">
                <div id="top">
                    <Link to="/" style={{textDecoration: "none"}}><img src={Ouro} style={{height: "120%"}}/></Link>

                </div>

                <div id="mid">
                    <div name={"home"} id={"home"} onClick={activeNav} className={`icons ${expand.home? "active": null}`}>
                        <BiHome color="white" size="1.8em" />
                    </div>

                    <div name={"cal"} id={"cal"} onClick={activeNav} className={`icons ${expand.cal? "active": null}`}>
                        <BiCalendar color="white" size="1.8em"/>
                    </div>

                    <div name={"contacts"} id={"contacts"} onClick={activeNav} className={`icons ${expand.contacts? "active": null}`}>
                        <FaRegAddressBook color="white" size="1.8em"/>
                    </div>

                    <div name={"mail"} id={"mail"} onClick={activeNav} className={`icons ${expand.mail? "active": null}`}>
                        <FiMail color="white" size="1.8em"/>
                    </div>

                </div>

                <div id="btm">
                    <div onClick={logOut} className={`btm-icons tooltip` }>
                        <BiLogOut color="white" size="1.8em"/><span className="tooltiptext">Log out</span>
                    </div>

                    <div name={"questions"} id={"questions"} onClick={activeNav} className={`btm-icons ${expand.questions? "active": null}`}>
                        <BsQuestionDiamond color="white" size="1.8em"/>
                    </div>

                    <div name={"settings"} id={"settings"} onClick={activeNav} className={`btm-icons ${expand.settings? "active": null}`}>
                        <FiSettings color="white" size="1.8em"/>
                    </div>
                </div>
            </div>
            <div id="expanded">
            <div id="nav-inner-top">
            </div>
            <div id="nav-inner-mid">
                <div id="nav-inner-home" >{expand.home && <Link to="/" style={{textDecoration: "none"}} className="nav-inner-btns">Home</Link>}</div>
            
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