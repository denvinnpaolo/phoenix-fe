import React from 'react';

import OuroLogo from '../../../../assets/img/ouro/ourologo.png'
import Content1IMG from '../../../../assets/img/ouro/website/landing/hero@2x.png'

const Main = () => {
    return(
        <div id="main-page-container">
            <div id="main-nav-container">
                <div id="main-logo-container">
                    <img src={OuroLogo} style={{maxWidth:"100%",height:"3em", objectFit: "contain"}} />
                </div>
                
                <div id="main-nav-btns">
                    <span className="main-nav-btn">Waste Transformers</span>
                    <span className="main-nav-btn">Waste Producers</span>
                    <span className="main-nav-btn">About</span>
                    <span className="main-nav-btn">Contact</span>
                    <button className="main-join-btn">JOIN OURO</button>
                    <span className="main-nav-btn" >Log in</span>
                </div>
            </div>

            <div id="main-content1-container">
                <div className="main-content1-contents">
                    <img src={Content1IMG} style={{objectFit: "contain", height: "20em", }}/>
                </div>
                <div className="main-content1-contents">
                    <div id="main-content1-texts">
                        <div id="main-content1-div">
                            <span style={{fontSize: "3em", fontWeight: "bolder", letterSpacing: ".02em"}}>Rethinking Food Waste</span>
                            <span>Our mission is to help divert food waste from landfills to initiatives coverting food waste in high value products and goods.</span>
                            <span>Ouro is a platform that helps businesses reprocessing food waste into new products and good source waste for their operations.</span>
                            <button className="main-join-btn" style={{height:"11%", width:"20%"}}>JOIN OURO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-content2-container">
                <div id="main-content2-top"></div>
                <div id="main-content2-btm"></div>
            </div>


        </div>
    )
}

export default Main;