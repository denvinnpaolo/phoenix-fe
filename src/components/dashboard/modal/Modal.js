import { Modal, Button } from 'react-bootstrap'
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'moment';

import { createCompleted, createCanceled } from '../../../store/actions/index.js';


function DataModal(props) {
    console.log(props.item)
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(createCanceled(props.item))
    }

    const handleComplete = () => {
        dispatch(createCompleted(props.item))
    }

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
          <b>{props.item.company_name}</b>{`:    ${props.item.time_available.toUpperCase()},   ${Moment(props.item.exp).format("MMMM DD, YYYY")} `}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div id="pickup-info-tbl">

                <div className="pickup-info-container">
                    <span style={{fontSize:".7em"}}>ITEMS</span>
                    <span className="book-info">{props.item.items}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".7em"}}>TYPE</span>
                    <span className="book-info" style={{textTransform: 'capitalize'}}>{props.item.description}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".7em"}}>ADDRESS</span>
                    <span className="book-info">{props.item.address}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".7em"}}>PHONE NUMBER</span>
                    <span className="book-info">{props.item.phone}</span>
                </div>
                <div className="pickup-info-container">
                    <span style={{fontSize:".7em"}}>CONTACT</span>
                    <span className="book-info" style={{textTransform: 'capitalize'}}>{`${props.item.name}`}</span>
                </div>
            </div>


        </Modal.Body>
        <Modal.Footer>
        <div id="modal-footer-style">
        <span>I would like to:</span>
            <button className="modal-button-style" onClick={() => {
                handleCancel()
                props.onHide()
            }}>Cancel</button>
            <span>OR</span>
            <button className="modal-button-style" onClick={() => {
                handleComplete()
                props.onHide()
            }}>Complete</button>
        <span> this    <u><b>PICK-UP</b></u></span>
        </div>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }

  export default DataModal;