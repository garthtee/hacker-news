import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const GeneralModal = ({
  title,
  body,
  show,
  onClose,
}) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default GeneralModal;
