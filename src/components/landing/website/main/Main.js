import React from 'react';
import { useHistory } from 'react-router-dom';

import Content1IMG from '../../../../assets/img/ouro/website/landing/hero@2x.png'
import SignUpIMG from '../../../../assets/img/ouro/signup.png';
import ConfirmPickUp from '../../../../assets/img/ouro/confirmpickup.png';
import Overview from '../../../../assets/img/ouro/overview.png'
import ONE from '../../../../assets/img/ouro/website/landing/number1@2x.png';
import TWO from '../../../../assets/img/ouro/website/landing/number2@2x.png';
import THREE from '../../../../assets/img/ouro/website/landing/number3@2x.png';
import PRODUCER1 from '../../../../assets/img/ouro/website/landing/benefit1@2x.png'
import PRODUCER2 from '../../../../assets/img/ouro/website/landing/benefit2@2x.png'
import PRODUCER3 from '../../../../assets/img/ouro/website/landing/benefit3@2x.png'
import Nav from '../nav/Nav.js';
import Footer from '../footer/Footer';



const Main = () => {
    const history = useHistory();
    return(
        <div id="main-page-container">
            <Nav />

            <div id="main-content1-container">
                <div className="main-content1-contents">
                    <img id="main-top-img" src={Content1IMG} style={{objectFit: "contain", height: "23em", }}/>
                </div>
                <div className="main-content1-contents">
                    <div id="main-content1-texts">
                        <div id="main-content1-div">
                            <span id="main-top-header" style={{fontSize: "3em", fontWeight: "bolder", letterSpacing: ".04em"}}>Rethinking Food Waste</span>
                            <span className="main-content1-regtxt">Our mission is to help divert food waste from landfills to initiatives coverting food waste in high value products and goods.</span>
                            <span className="main-content1-regtxt">Ouro is a platform that helps businesses reprocessing food waste into new products and good source waste for their operations.</span>
                            <div id="main-content1-btncont">
                                <button className="main-join-btn" style={{height:"55%", width:"20%", justifySelf: "flex-end"}} onClick={()=> history.push('/welcome/register')}>JOIN OURO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-content2-container">
                <div id="main-content2-top">
                    <div id="main-content2-texts">
                        <div id="main-content2-toptxt">
                            <div id="main-content2-innertxt">
                            <span id="main-top-header" style={{fontSize: "3em", fontWeight: "bold", letterSpacing: ".04em"}}>Is Your Company A Waste Transfomer?</span>
                            <span className="main-content2-regtxt">
                                Your operations can scale significantly with increased access to food waste.
                                That's why we built this platform just for you.
                            </span>
                            <span className="main-content2-regtxt">
                                Food waste is a valuable resource and we can all reduce our environmental impact
                                by diverting away from landfills.
                            </span>
                            </div>
                        </div>
                        <div id="main-content2-btmtxt">
                            <span className="main-content2-btmheader" style={{fontSize: "1.5em", fontWeight: "bolder", letterSpacing: ".05em"}}>Get started</span>
                        </div>
                    </div>
                </div>
                <div id="main-content2-btm">
                    <div className="main-content2-scrnshots"><img src={SignUpIMG} style={{height:"100%", width: "100%"}}/></div>
                    <div className="main-content2-scrnshots"><img src={ConfirmPickUp} style={{height:"100%", width: "100%"}}/></div>
                    <div className="main-content2-scrnshots"><img src={Overview} style={{height:"100%", width: "100%"}}/></div>
                </div>
            </div>
            <div id="main-content2-screenshots2">
                <div className="main-content2-scrnshots2" style={{backgroundImage: `url(${ONE})`}}>Create a free profile</div>
                <div className="main-content2-scrnshots2" style={{backgroundImage: `url(${TWO})`}}>Schedule pick-ups</div>
                <div className="main-content2-scrnshots2" style={{backgroundImage: `url(${THREE})`}}>Track in the dashboard</div>
            </div>

            <div id="main-content3-topjoin">
                <button className="main-join-btn" id="main-join-btnres" style={{height: "23%", fontSize:"1.12em", width: "13%", borderRadius: "20px"}} onClick={()=> history.push('/welcome/wt-register')}>JOIN OURO</button>
            </div>

            <div id="main-content4-container">
                <div id="main-content4-textscont">
                    <div id="main-content4-texts">
                        <div id="main-content4-toptxt">
                            <div id="main-content4-innertxt">
                                <span id="main-top-header" style={{fontSize: "3em", fontWeight: "bold", letterSpacing: ".05em"}}>Are You A Waste Producer?</span>
                                <span className="main-content4-regtxt">
                                    Ouro Offers avenues where food waste can be diverted towards, to be repurposed into new products and goods, which reduces your costs and benefits the environment.
                                </span>
                            </div>
                        </div>
                        <div id="main-content4-btmtxt">
                            <span className="main-content2-btmheader" style={{fontSize: "1.5em", fontWeight: "bolder", letterSpacing: ".05em"}}>Benefits</span>
                        </div>
                    </div>
                </div>

                <div id="main-content4-icons">
                    <div className="main-content4-icon">
                        <div className="main-content4-imgcont">
                            <img src={PRODUCER1} style={{height: "100%", width:"100%"}} />
                        </div>
                        <div className="main-content4-textcont">
                            <span className="main-content4-headerres" style={{fontWeight: "bold", fontSize: "1.4em"}}>FOOD WASTE DIVERSION</span>
                            <span className="main-content4-icontext2 main-content4-headerres">53% of all food produced in Canada ends up in landFills</span>
                        </div>
                        </div>
                    <div className="main-content4-icon">
                        <div className="main-content4-imgcont" >
                            <img src={PRODUCER2} style={{height: "100%", width:"100%"}} />
                        </div>
                        <div className="main-content4-textcont">
                            <span className="main-content4-headerres" style={{fontWeight: "bold", fontSize: "1.4em"}}>WASTE SAVINGS</span>
                            <span className="main-content4-icontext2 main-content4-headerres">Save on waste collection cost</span>
                        </div>
                    </div>
                    <div className="main-content4-icon">
                        <div className="main-content4-imgcont">
                            <img src={PRODUCER3} style={{height: "100%", width:"100%"}} />
                        </div>
                        <div className="main-content4-textcont">
                            <span className="main-content4-headerres" style={{fontWeight: "bold", fontSize: "1.4em"}}>SUSTAINABILITY</span>
                            <span className="main-content4-icontext2 main-content4-headerres">Reduce CO2 emissions from landfills</span>
                        </div>
                    </div>
                </div>

                <div id="main-content3-topjoin">
                    <button className="main-join-btn" id="main-join-btnres" style={{height: "23%", fontSize:"1.12em", width: "13%", borderRadius: "20px"}} onClick={()=> history.push('/welcome/wp-register')}>JOIN OURO</button>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Main;