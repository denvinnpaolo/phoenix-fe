import React from 'react';

const UserInfo = props => {

    return(
        <div id="company-info-container">
            <form id="company-info-form">
                <div className="companyinfo-inputs-cont"><span>NAME</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>JOB TITLE</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>PHONE NUMBER</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>EMAIL</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>PASSWORD</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>RE-TYPE</span><input className="register-inputs"/></div>

                </form>
        </div>
    )

}

export default UserInfo;
