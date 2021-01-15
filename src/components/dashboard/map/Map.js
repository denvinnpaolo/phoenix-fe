import React from 'react';
import Geocode from "react-geocode";


const MapComponent = () => {
    Geocode.setLanguage("en");
    Geocode.enableDebug();
    return(
        <div id="Map-container"></div>
    )
};

export default MapComponent;