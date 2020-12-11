import React from 'react';
import { useHistory } from 'react-router-dom';

import Footer from '../footer/Footer';
import Nav from '../nav/Nav.js';

import AboutIMG from '../../../../assets/img/ouro/website/about/graphic@3x.png'

const About = () => {
    return(
        <div id="about-page-container">
            <Nav />
        <div id="about-content-container">
            <div id="about-content-start">
                <div id="about-content-texts">
                    <div id="about-content-innertexts">
                        <div id="about-content-txt">
                            <span style={{fontSize:"3.4em", fontWeight: "bold"}}>About</span>
                            <span className="about-start-txt">Team Project Phoenix is on a mission to help rethink what is done with food waste.</span>
                            <span className="about-start-txt">Ouro helps drive the diversion of food waste from landfills to initiatives that require food waste as a raw material. This will decrease the damages to our environment as a result of  the release of greenhouse gases, produced as food waste decomposes in landfills.</span>
                            <span className="about-start-txt">With Ouro, Team Project Phoenix is contributing to the global movement toward a circular economy by raising awareness about the importance of food waste as a resource that can be recovered and reused for a more sustainable future for all.</span>
                        </div>
                    </div>

                </div>
                <div id="about-content-img">
                    <img src={AboutIMG} style={{height: "85%"}} />
                </div>
            </div>
            <div id="about-subheader-container">
                <div id="about-subheader-texts">
                    <span style={{fontWeight:"bold", fontSize: "1.5em"}}>Team</span>
                </div>
            </div>
            <div id="about-icons-container">
                <div id="about-content-icons">
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span style={{fontSize:".8em", fontWeight: "bold"}}>DESIGN</span>
                                <span style={{fontSize:"1.3em"}}>Karen Sum</span>
                        </div>
                        <span style={{fontSize: ".84em"}}>Karen is a Toronto-based multi-talented UX/UI designer. She is very passionate about using her skills to design solutions that meet user’s needs. When she’s not creating delightful user experiences, she spends her free time capturing experiences as an avid photographer!</span>
                    </div>
                    </div>
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span style={{fontSize:".8em", fontWeight: "bold"}}>DEVELOPMENT</span>
                                <span style={{fontSize:"1.3em"}}>Denvinn Magsino</span>
                            </div>
                            <span style={{fontSize: ".84em"}}>Denvinn is a Los Angeles-based full stack developer who enjoys solving technological problems and developing websites. He is highly skilled with various languages such as HTML, CSS, LESS, Javascript, React, Redux, and many more. Whenever he’s not coding you can find him walking his three dogs around in a park!</span>
                        </div>
                    </div>
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span style={{fontSize:".8em", fontWeight: "bold"}}>PRODUCT</span>
                                <span style={{fontSize:"1.3em"}}>Barnabas Akeredolu</span>
                            </div>

                            <span style={{fontSize: ".84em"}}>Barnabas is a Toronto-based software sales guy. He is passionate about solutions that help achieve goals 2 (Zero Hunger), 7 (Affordable & Clean Energy) & 12 (Responsible Consumption & Production), of the UN's Sustainable Development Goals. When he’s not chasing solutions you can find him playing Candy Crush!</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>



        <Footer />
    </div>
    )
};

export default About;


// <div id="main-content4-icons">
// <div className="main-content4-icon">
//     <div className="main-content4-imgcont">
//         <img src={PRODUCER1} style={{height: "100%", width:"100%"}} />
//     </div>
//     <div className="main-content4-textcont">
//         <span style={{fontWeight: "bold", fontSize: "1.4em"}}>FOOD WASTE DIVERSION</span>
//         <span className="main-content4-icontext2">53% of all food produced in Canada ends up in landFills</span>
//     </div>
// </div>
// <div className="main-content4-icon">
//     <div className="main-content4-imgcont" >
//         <img src={PRODUCER2} style={{height: "100%", width:"100%"}} />
//     </div>
//     <div className="main-content4-textcont">
//         <span style={{fontWeight: "bold", fontSize: "1.4em"}}>WASTE SAVINGS</span>
//         <span className="main-content4-icontext2">Save on waste collection cost</span>
//     </div>
// </div>
// <div className="main-content4-icon">
//     <div className="main-content4-imgcont">
//         <img src={PRODUCER3} style={{height: "100%", width:"100%"}} />
//     </div>
//     <div className="main-content4-textcont">
//         <span style={{fontWeight: "bold", fontSize: "1.4em"}}>SUSTAINABILITY</span>
//         <span className="main-content4-icontext2">Reduce CO2 emissions from landfills</span>
//     </div>
// </div>
// </div>