import React, { useState, useEffect } from 'react';
import { BiHome, BiCalendar} from 'react-icons/bi';
import { FiSettings,FiMinusCircle } from 'react-icons/fi';
import { BsQuestionDiamond } from 'react-icons/bs';

const Nav = () => {
    const [expand, setExpand] = useState({
        state: false,
        home: false,
        cal: false,
        contacts: false
    });

    const [prev, setPrev] = useState(expand.category)
    
    
    const handleExpand = (e) => {
        if(expand.state === true){
            setExpand({         
                state: false,
                home: false,
                cal: false});
        } else {
            setExpand({ ...expand, state: true, home: true });
        }
    };
    
      const activeNav = (e) => {
        var navLi = expand[e.currentTarget.id]

        setExpand({ state: true, [e.currentTarget.id]: !navLi  });
      };
    
    return (
        <div id="nav-container">
            <div id="side-nav">
                <div id="top">
                    <div className="logo"></div>
                    <div className="icons" onCLick={handleExpand}><FiMinusCircle size="2em"/></div>

                </div>

                <div id="mid">
                    <div  name={"home"} id={"home"} onClick={activeNav} className={`icons ${expand.home? "active": null}`}>
                        <BiHome size="2em"/>
                    </div>

                    <div   name={"cal"} id={"cal"} onClick={activeNav} className={`icons ${expand.cal? "active": null}`}>
                        <BiCalendar size="2em"/>
                    </div>

                    <div>
                        <h3>icon</h3>
                    </div>
                </div>

                <div id="btm">
                    <div>
                        <h3>icon</h3>
                    </div>
                </div>
            </div>
            {expand.state && <div id="expanded"></div>}
        </div>
    )
};

export default Nav;