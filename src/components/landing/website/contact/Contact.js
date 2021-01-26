import React from 'react';
import Nav from '../nav/Nav.js';
import Footer from '../footer/Footer.js'

const Contact = () => {
    return(
        <div id="main-contact-container">
            <Nav />
            <div id="contact-header" style={{fontSize:"3.4em", fontWeight: "bold"}}>Contact</div>
            <div id="contacts-texts">
                <span>We would love to hear from you so please feel free to send a message.</span>
            </div>
            <div id="contacts-form-container">
                <div id='contacts-forms'>
                    <div style={{width: "50%"}}>
                        <span className="contacts-field-texts">NAME</span>
                        <input className="contacts-inputs" style={{width: " 100%"}} />
                    </div>
                    <div style={{width: "50%"}}>
                        <span className="contacts-field-texts">EMAIL</span>
                        <input className="contacts-inputs" style={{width: " 100%"}} />
                    </div>
                    <div style={{height: "40%", width: "100%"}}>
                        <span className="contacts-field-texts">MESSAGE</span>
                        <input style={{height: "100%", width: " 100%"}} />
                    </div>
                    <button>Submit</button>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Contact;
