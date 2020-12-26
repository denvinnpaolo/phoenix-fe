import React, { useState } from 'react';

const AddWaste = () => {

    const [newPickUp, setNewPickUp] = useState({
        "date_posted":"",
        "exp": "",
        "time_available": "",
        "type": "",
        "items": "",
        "address":"",
        "description": "",
        "producer_id":""
});
    const [confirm, setConfirm] = useState(false)


    return(
        <div id="pickup-book-cont">
            <div id="welcome-header-container">
                <div id="welcome-header-text">
                </div>
                <div id="welcome-header-alerts">
                    <BsBell size="1.1em" />
                    <BsPerson size="1.7em"  />
                </div>
            </div>
            <div id="pickup-header-cont">
                <span id="pickup-book-header">Book Pick-up</span>
            </div>

            <div id="pickup-content-cont">
                <div id="pickup-book-confirm">
                    {confirm? <span id="check"><FcCheckmark size="2.2em" />Success!</span> : null }
                </div>
                <div id="pickup-book-tbl">
                    <div id="pickup-info-tbl">
                        <div style={{display:'flex', width: "100%", justifyContent: "center"}}>
                            <span style={{fontSize: "1.5em"}}>{availbyid.currentAvail.data[0][0].company_name}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>DATE</span>
                            <span className="book-info">{Moment(availbyid.currentAvail.data[0][0].exp).format("MMMM DD, YYYY")}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>TIME OF DAY</span>
                            <span className="book-info" style={{textTransform: 'capitalize'}}>{availbyid.currentAvail.data[0][0].time_available}</span>
                        </div>                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>ITEMS</span>
                            <span className="book-info">{availbyid.currentAvail.data[0][0].items}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>TYPE</span>
                            <span className="book-info" style={{textTransform: 'capitalize'}}>{availbyid.currentAvail.data[0][0].description}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>ADDRESS</span>
                            <span className="book-info">{availbyid.currentAvail.data[0][0].address}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>PHONE NUMBER</span>
                            <span className="book-info">{availbyid.currentAvail.data[0][0].phone}</span>
                        </div>
                        <div className="pickup-info-container">
                            <span style={{fontSize:".7em"}}>CONTACT</span>
                            <span className="book-info" style={{textTransform: 'capitalize'}}>{`${availbyid.currentAvail.data[0][0].name}`}</span>
                        </div>
                    </div>
                </div>
                <div id="pickup-book-btns">
                    <button className="pickup-book-btns" onClick={()=>{
                        history.push('/available/request/all')
                    }}>Back</button>
                    {!confirm? <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=>{
                          handlePickup(availbyid.currentAvail.data[0][0])
                      }}
                    >
                        Confirm Pick Up
                    </button>
                    :
                    <button 
                      className="pickup-book-btns" 
                      style={{width: "220px", backgroundColor: "#FF9B64", border: "1px solid #FF9B64" }}
                      onClick={()=> history.push('/available/request/all')}
                    >
                        Add more
                    </button>}
                    </div>
            </div>
        </div>
    )
};

export default AddWaste