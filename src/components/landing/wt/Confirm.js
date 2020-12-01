import React from 'react';

const Confirm = props => {


    return(
        <div id="company-info-container">
            <div id="confirm-container">
            <div className="confirm-field">
                <div className="confirm-label">COMPANY NAME:</div>
                <div className="confirm-value">{props.values.company_name}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">COMPANY SIZE:</div>
                <div className="confirm-value">{props.values.company_size}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">WEBSITE:</div>
                <div className="confirm-value">{props.values.website}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">COMPANY ADDRESS:</div>
                <div className="confirm-value">{props.values.address}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">COMPANY PHONE:</div>
                <div className="confirm-value">{props.values.phone}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">NAME:</div>
                <div className="confirm-value">{props.values.namme}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">JOB TITLE</div>
                <div className="confirm-value">{props.values.job_title}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">EMAIL</div>
                <div className="confirm-value">{props.values.email}</div>
            </div>
            <div className="confirm-field">
                <div className="confirm-label">PASSWORD</div>
                <div className="confirm-value">●●●●●●●●</div>
            </div>
            </div>
        </div>
    )
};

export default Confirm;