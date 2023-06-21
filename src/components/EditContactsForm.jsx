/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'

const EditContactsForm = ({editContact, prefilmodal, handleClose }) =>{
 const [contacts, setContacts] = useState({
  id:prefilmodal.id,
  name: prefilmodal.name,
  phoneNumber: prefilmodal.phoneNumber,
 location: prefilmodal.location
});

const handleContactedit = (e) =>{
  e.preventDefault();
    setContacts({
      ...contacts,
      [e.target.name]: e.target.value,
    });
};

const contactEditSubmit = (e) => {
  e.preventDefault();
  editContact(contacts.id, contacts);
  handleClose(contacts);
};



  return (
  <div className="myeditforms">
<Form onSubmit={contactEditSubmit}>
    <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              className="input"
              name="name"
              value={contacts.name}
              onChange={handleContactedit}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number"
              className="input"
              name="phoneNumber"
              value={contacts.phoneNumber}
              onChange={handleContactedit}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              className="input"
              name="location"
              value={contacts.location}
              onChange={handleContactedit}
            />
      </Form.Group>
      <Modal.Footer>
    <Button variant="primary" type="submit" onClick={handleClose} className="btn1">
          Save
        </Button>
        </Modal.Footer>
    </Form>

  </div>
    
    
  )
}

export default EditContactsForm