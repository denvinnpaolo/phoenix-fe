import React from 'react';
import { useHistory } from 'react-router-dom';

import OuroLogo from '../../../../assets/img/ouro/ourologo.png'
import PRODUCER1 from '../../../../assets/img/ouro/website/landing/benefit1@2x.png'
import PRODUCER2 from '../../../../assets/img/ouro/website/landing/benefit2@2x.png'
import PRODUCER3 from '../../../../assets/img/ouro/website/landing/benefit3@2x.png'
import Nav from '../nav/Nav.js';

const About = () => {
    const history = useHistory();
    return(
        <div id="about-page-container">
            <Nav />

        <div id="about-content-container">
        
        
        <div id="main-content4-textscont">
                    <div id="main-content4-texts">
                        <div id="main-content4-toptxt">
                            <div id="main-content4-innertxt">
                                <span style={{fontSize: "3.2em", fontWeight: "bold", letterSpacing: ".07em"}}>About</span>
                                <span className="main-content4-regtxt">
                                    Ouro Offers avenues where food waste can be diverted towards, to be repurposed into new products and goods, which reduces your costs and benefits the environment.
                                </span>
                            </div>
                        </div>
                        <div id="main-content4-btmtxt">
                            <span style={{fontSize: "1.5em", fontWeight: "bolder", letterSpacing: ".05em"}}>Team</span>
                        </div>
                    </div>
                </div>

        <div id="main-content4-icons">
            <div className="main-content4-icon">
                <div className="main-content4-imgcont">
                    <img src={PRODUCER1} style={{height: "100%", width:"100%"}} />
                </div>
                <div className="main-content4-textcont">
                    <span style={{fontWeight: "bold", fontSize: "1.4em"}}>FOOD WASTE DIVERSION</span>
                    <span className="main-content4-icontext2">53% of all food produced in Canada ends up in landFills</span>
                </div>
            </div>
            <div className="main-content4-icon">
                <div className="main-content4-imgcont" >
                    <img src={PRODUCER2} style={{height: "100%", width:"100%"}} />
                </div>
                <div className="main-content4-textcont">
                    <span style={{fontWeight: "bold", fontSize: "1.4em"}}>WASTE SAVINGS</span>
                    <span className="main-content4-icontext2">Save on waste collection cost</span>
                </div>
            </div>
            <div className="main-content4-icon">
                <div className="main-content4-imgcont">
                    <img src={PRODUCER3} style={{height: "100%", width:"100%"}} />
                </div>
                <div className="main-content4-textcont">
                    <span style={{fontWeight: "bold", fontSize: "1.4em"}}>SUSTAINABILITY</span>
                    <span className="main-content4-icontext2">Reduce CO2 emissions from landfills</span>
                </div>
            </div>
        </div>
    <div id="main-content3-topjoin">
    </div>

    <div id="main-content-footer">
        <div id="main-footer-linkscont">
            <div className="main-footer-link">
                <span style={{fontSize: ".75em", color:"#FF9B64", fontWeight: "bolder"}}>PRODUCT</span>
                <span>Features</span>
                <span>FAQ</span>
            </div>
            <div className="main-footer-link">
                <span style={{fontSize: ".75em", color:"#FF9B64", fontWeight: "bolder"}}>COMPANY</span>
                <span>About</span>
                <span>Press</span>
            </div>
            <div className="main-footer-link">
                <span style={{fontSize: ".75em", color:"#FF9B64", fontWeight: "bolder"}}>SUPPORT</span>
                <span>Tutorials</span>
                <span>Contacts</span>
            </div>
        </div>
        <div id="main-footer-copyright"></div>
    </div>
</div>
        </div>
    )
};

export default About;