import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiHome, BiCalendar} from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaRegAddressBook } from 'react-icons/fa'
import { BsQuestionDiamond, BsBoxArrowRight, BsBoxArrowLeft, BsPeople } from 'react-icons/bs';

const Nav = () => {
    const [expand, setExpand] = useState({
        state: false,
        home: false,
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
    
    return (
        <div id="dash-nav-container">
            <div id="side-nav">
                <div id="top">
                    <Link to="/"><h1 style={{color:"white"}}>Ouro</h1></Link>
                    <div class="icons">
                       { expand.state? <BsBoxArrowLeft color="white" size="1.3em" onClick={handleExpand} />
                        :<BsBoxArrowRight color="white" size="1.3em" onClick={handleExpand} /> }
                    </div>
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
                </div>
            </div>
            {expand.state && <div id="expanded"></div>}
        </div>
    )
};

export default Nav;