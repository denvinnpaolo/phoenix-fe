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
                    <div>
                    <span>NAME</span>
                    <input />
                    </div>
                    
                    <span>EMAIL</span>
                    <input />
                    <span>MESSAGE</span>
                    <input />
                    <button> Submit</button>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Contact;
