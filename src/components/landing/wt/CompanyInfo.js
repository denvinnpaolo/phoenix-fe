import React, { useState } from 'react';

const CompanyInfo = props => {
    const { type } = props.values;

    const [company, setCompany] = useState({
        company_name: props.values.company_name,
        company_size: props.values.company_size,
        category: type === 'wp'?  props.values.category : null,
        website: props.values.website,
        company_address: props.values.company_address,
        company_phone: props.values.company_phone
    });

    const handleChange = e => {
        setCompany({
            ...company, 
            [e.target.name] : e.target.value
        })
    };

    const handleBlur =  e => {
        props.setNewUser({
            ...props.values,
            [e.target.name] : company.[e.target.name]

        })
    };
    
    return(
        <div id="company-info-container">
            <form id="company-info-form">
                <div className="companyinfo-inputs-cont">
                    <span>COMPANY NAME</span>
                    <input  
                        className="register-inputs"
                        name="company_name"
                        value={company.company_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>
                {type === 'wp'? <div className="companyinfo-inputs-cont">
                <span>COMPANY TYPE</span>
                <select  
                    className="register-inputs"
                    name="category"
                    value={company.category}
                    onBlur={handleBlur}
                    onChange={handleChange}
                >
                    <option></option>
                    <option className="registration-form-option" value="restaurant">Restaurant</option>
                    <option value="hospital">Hospital</option>
                    <option value="business">Business</option>
                </select>
                </div> : null}
                <div className="companyinfo-inputs-cont">
                    <span>COMPANY SIZE</span>
                    <input 
                        className="register-inputs"
                        type="number"
                        name="company_size"
                        value={company.company_size}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>WEBSITE</span>
                    <input 
                        className="register-inputs"
                        name="website"
                        value={company.website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>COMPANY ADDRESS</span>
                    <input 
                        className="register-inputs"
                        name="company_address"
                        value={company.company_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>COMPANY PHONE</span>
                    <input 
                        className="register-inputs"
                        name="company_phone"
                        value={company.company_phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
        </div>
    )

}

export default CompanyInfo;