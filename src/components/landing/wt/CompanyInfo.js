import React, { useState } from 'react';

const CompanyInfo = props => {
    const { type } = props.values;

    const [company, setCompany] = useState({
        company_name: props.values.company_name,
        company_size: props.values.company_size,
        website: props.values.website,
        address: props.values.address,
        city: props.values.city,
        state: props.values.state,
        country: props.values.country
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
                    <span>ADDRESS</span>
                    <input 
                        className="register-inputs"
                        name="address"
                        value={company.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                
                <div className="companyinfo-inputs-cont">
                    <span>CITY</span>
                    <input 
                        className="register-inputs"
                        name="city"
                        value={company.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>STATE</span>
                    <input 
                        className="register-inputs"
                        name="state"
                        value={company.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>COUNTRY</span>
                    <input 
                        className="register-inputs"
                        name="country"
                        value={company.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
        </div>
    )

}

export default CompanyInfo;