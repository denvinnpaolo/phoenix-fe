import { Modal, Button } from 'react-bootstrap'
import React from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'moment';

import { createCompleted, createCanceled, createNewWaste } from '../../../store/actions/index.js';
import Loading from '../../UI/loading/Loading.js';


function DataModal(props, type) {
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(createCanceled(props.item))
        let newPickup = {
            type: props.item.type,
            producer_id: props.item.producer_id,
            address: props.item.address,
            price: props.item.price,
            items: props.item.items,
            time_available: props.item.time_available,
            exp: props.item.exp,
            date_posted: props.item.date_posted
        }
        dispatch(createNewWaste(newPickup))
    }

    const handleComplete = () => {
        dispatch(createCompleted(props.item))
    }
    if(!props.item){
        return null
    } else {

    return (
        <div onClick={e => e.stopPropagation()}>
      <Modal
        {...props}
        show={props.show}
        scrollable={true}
        size="md"
        contentClassName="modal-style"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <b>{props.item.company_name}</b>{`: ${Moment(props.item.exp).format("MMM DD, YYYY")} - ${props.item.time_available.toLowerCase()} `}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div id="pickup-info-tbl">

                <div className="pickup-info-container">
                    <span style={{fontSize:".9em", fontWeight:"bold"}}>ITEMS</span>
                    <span className="modal-info">{props.item.items}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".9em", fontWeight:"bold"}}>PRICE</span>
                    <span className="modal-info" style={{textTransform: 'capitalize'}}>{props.item.price}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".9em", fontWeight:"bold"}}>ADDRESS</span>
                    <span className="modal-info">{props.item.address}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".9em", fontWeight:"bold"}}>PHONE NUMBER</span>
                    <span className="modal-info">{props.item.phone}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".9em", fontWeight:"bold"}}>CONTACT</span>
                    <span className="modal-info" style={{textTransform: 'capitalize'}}>{`${props.item.name}`}</span>
                </div>
            </div>


        </Modal.Body>
        <Modal.Footer style={{display: "flex", justifyContent: "center", border: "none"}}>
        {props.type ==='wt'?

        <div id="modal-footer-style">
            <button className="modal-button-style" onClick={() => {
                handleCancel()
                props.onHide()
            }}>Cancel</button>
            <button className="modal-button-style" style={{backgroundColor: "#FF9B64", border: "1px solid #FF9B64"}} 
            onClick={() => {
                handleComplete()
                props.onHide()
            }}>Complete</button>
        </div>
        :
        <div id="modal-footer-style">
            <button className="modal-button-style" onClick={() => {
                props.onHide()
            }}>close</button>
            <button 
              className="modal-button-style" 
              style={{backgroundColor: "#FF9B64", border: "1px solid #FF9B64"}} 
              onClick={props.onHide}
            >
                archive
            </button>
        </div>
        }
        </Modal.Footer>
      </Modal>
      </div>
    );
    }
  }

  export default DataModal;