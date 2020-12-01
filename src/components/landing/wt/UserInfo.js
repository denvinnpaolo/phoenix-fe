import React, { useState } from 'react';

const UserInfo = props => {

    const [user, setUser] = useState({
        name: props.values.name,
        job_title: props.values.job_title,
        email: props.values.email,
        password: props.values.password,
        phone: props.values.phone
    });

    const handleChange = e => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    };

    const handleBlur =  e => {
        props.setNewUser({
            ...props.values,
            [e.target.name] : user.[e.target.name]

        })
    };
    
    return(
        <div id="company-info-container">
            <form id="company-info-form">
                <div className="companyinfo-inputs-cont">
                    <span>NAME</span>
                    <input  
                        className="register-inputs"
                        name="name"
                        value={user.name}
                        onBlur={handleBlur}
                        onChange={handleChange}

                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>JOB TITLE</span>
                    <input 
                        className="register-inputs"
                        name="job_title"
                        value={user.job_title}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>WEBSITE</span>
                    <input 
                        className="register-inputs"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>EMAIL</span>
                    <input 
                        className="register-inputs"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                </div>
                <div className="companyinfo-inputs-cont">
                    <span>PASSWORD</span>
                    <input 
                        className="register-inputs"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </form>
        </div>
    )
}

export default UserInfo;
