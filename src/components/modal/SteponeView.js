import React from 'react'

import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import "../../assets/css/ModalOne.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function SteponeView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div onClick={handleShow}>
      <h3>  <FaCheck />Step 1 : व्यक्तिगत जानकारी (Click to View)</h3>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="nd-modal-title">
           Step one View
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="nd-modal-body">
        </Modal.Body>
        <Modal.Footer className="nd-footer">
          <Button variant="secondary" className="nd-close-btn" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}




export default SteponeView