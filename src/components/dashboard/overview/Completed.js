import React from 'react';
import { BiCalendarCheck } from 'react-icons/bi'


const Upcoming = props => {

    return(
        <div className="overview-content-container">
            <div className="overview-content-header">
                <div className="overview-header-icon">
                    <div id="overview-circular-iconbg"><BiCalendarCheck  size="80%" color="#288B50"/></div>
                </div>
                <div className="overview-header-info">
                    <span style={{fontSize:"1.5em"}}>Completed</span>
                    <div style={{display:"flex", justifyContent: "center", width: "50%", fontSize:"2em", fontWeight: "bold"}}>5</div>
                </div>
            </div>
        </div>
    )

};

export default Upcoming;