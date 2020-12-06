import React from 'react';
import { BiCalendarMinus } from 'react-icons/bi';

import { } from '../../../store/actions/index.js'



const Upcoming = props => {

    return(
        <div className="overview-content-container">
            <div className="overview-content-header">
                <div className="overview-header-icon">
                    <div id="overview-circular-iconbg"><BiCalendarMinus  size="80%" color="#288B50"/></div>
                </div>
                <div className="overview-header-info">
                    <span style={{fontSize:"1.5em"}}>Canceled</span>
                    <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>1</div>
                </div>
            </div>
        </div>
    )

};

export default Upcoming;