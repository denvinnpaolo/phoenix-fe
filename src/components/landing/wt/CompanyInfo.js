import React from 'react';

const CompanyInfo = props => {
    const {
        company_name,
        company_size,
        website,
        company_address,
        company_phone
    } = props.values
    return(
        <div id="company-info-container">
            <form id="company-info-form">
                <div className="companyinfo-inputs-cont"><span>COMPANY NAME</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>COMPANY SIZE</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>WEBSITE</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>COMPANY ADDRESS</span><input className="register-inputs"/></div>
                <div className="companyinfo-inputs-cont"><span>COMPANY PHONE</span><input className="register-inputs"/></div>
            </form>
        </div>
    )

}

export default CompanyInfo;