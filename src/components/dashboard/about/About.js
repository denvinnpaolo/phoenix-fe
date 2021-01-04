import React from 'react';
import { useHistory } from 'react-router-dom';

import AboutIMG from '../../../assets/img/ouro/website/about/graphic@3x.png'

const About = () => {
    return(
        <div id="about-page-dash">
        <div id="about-dashcontent-container">
            <div id="about-content-start">
                <div id="about-dashcontent-texts">
                    <div id="about-dashcontent-innertexts">
                        <div id="about-content-txt">
                            <span id="about-dash-header" style={{fontSize:"3em", fontWeight: "bold"}}>About</span>
                            <span className="about-dashstart-txt">Team Project Phoenix is on a mission to help rethink what is done with food waste.</span>
                            <span className="about-dashstart-txt">Ouro helps drive the diversion of food waste from landfills to initiatives that require food waste as a raw material. This will decrease the damages to our environment as a result of  the release of greenhouse gases, produced as food waste decomposes in landfills.</span>
                            <span className="about-dashstart-txt">With Ouro, Team Project Phoenix is contributing to the global movement toward a circular economy by raising awareness about the importance of food waste as a resource that can be recovered and reused for a more sustainable future for all.</span>
                        </div>
                    </div>

                </div>
                <div id="about-content-img">
                    <img id="about-img-res" src={AboutIMG} style={{height: "85%"}} />
                </div>
            </div>
            <div id="about-subheader-container">
                <div id="about-subheader-texts">
                    <span id="about-subheader-res" style={{fontWeight:"bold", fontSize: "1.3em"}}>Team</span>
                </div>
            </div>
            <div id="about-icons-dash">
                <div id="about-content-icons">
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span className="creator-header-res" style={{fontSize:".8em", fontWeight: "bold"}}>DESIGN</span>
                                <span className="creator-name-res" style={{fontSize:"1.3em"}}>Karen Sum</span>
                        </div>
                        <span className="creator-text-res" style={{fontSize: ".74em"}}>Karen is a Toronto-based multi-talented UX/UI designer. She is very passionate about using her skills to design solutions that meet user’s needs. When she’s not creating delightful user experiences, she spends her free time capturing experiences as an avid photographer!</span>
                    </div>
                    </div>
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span className="creator-header-res" style={{fontSize:".8em", fontWeight: "bold"}}>DEVELOPMENT</span>
                                <span className="creator-name-res" style={{fontSize:"1.3em"}}>Denvinn Magsino</span>
                            </div>
                            <span className="creator-text-res" style={{fontSize: ".74em"}}>Denvinn is a Los Angeles-based full stack developer who enjoys solving technological problems and developing websites. He is highly skilled with various languages such as HTML, CSS, LESS, Javascript, React, Redux, and many more. Whenever he’s not coding you can find him walking his three dogs around in a park!</span>
                        </div>
                    </div>
                    <div className="about-content-icon">
                        <div className="about-icons-inner">
                            <div className="about-icons-headers">
                                <span className="creator-header-res" style={{fontSize:".8em", fontWeight: "bold"}}>PRODUCT</span>
                                <span className="creator-name-res" style={{fontSize:"1.3em"}}>Barnabas Akeredolu</span>
                            </div>

                            <span className="creator-text-res" style={{fontSize: ".74em"}}>Barnabas is a Toronto-based software sales guy. He is passionate about solutions that help achieve goals 2 (Zero Hunger), 7 (Affordable & Clean Energy) & 12 (Responsible Consumption & Production), of the UN's Sustainable Development Goals. When he’s not chasing solutions you can find him playing Candy Crush!</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    </div>
    )
};

export default About;

