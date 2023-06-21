/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import EditContactsForm from "./EditContactsForm";


function Contacts(props) {
  // const contacts = props.contacts; this can be used too
  const title = props.title;
  const editContact = props.editContact
  const deleteContact= props.deleteContact
  const [prefilmodal, setPrefilmodal] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);}
  const handleShow = (contact) => {
    setShow(true);
    setPrefilmodal(contact); 
  }


  const handleDeleteContact =(contactId) =>{
    deleteContact(contactId);
  }
  return (
    <div>
      <div className="mycontacts">
        {props.contacts.map((contact) => (
          <div key={contact.id} className="mycontact">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  Name: {contact.name}<br />
                  Phone Number: {contact.phoneNumber}<br />
                  Location: {contact.location}<br />
                </Card.Text>
                <div>
                  <Button className="edit" variant="primary" onClick={()=>handleShow(contact)} prefilmodal={prefilmodal}>Edit</Button>&nbsp;&nbsp;
                  <Button variant="danger" onClick={()=>handleDeleteContact(contact.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Changes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <EditContactsForm prefilmodal={prefilmodal} editContact={editContact} handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
      </div>

      
    </div>
  );
}

export default Contacts;
