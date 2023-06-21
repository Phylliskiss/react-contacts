// import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import { Col, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";


function App() {
  const [contacts, setContacts] = useState([
    {id:uuid(), name: " phylia", phoneNumber: "+233245666666", location: "Accra" },
    {id:uuid(), name: " Chidera", phoneNumber: "+233245666666", location: "East" }
  ]);

  

  const getData = (data) => {
      setContacts([...contacts, data])
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId))
  }

  // eslint-disable-next-line no-unused-vars
  const editContact = (id, editedContact) =>{
    setContacts(contacts.map((contact) => contact.id ===id ? editedContact : contact))
  }

  return (
    <>
      <div className="">
      <Row>
        <Col md={6}>
          <ContactsForm getData={getData} title='Personal Data' />
        </Col>
        <Col md={6}>
          <Contacts contacts={contacts} title='Users' deleteContact={deleteContact} editContact={editContact}/>
        </Col>
      </Row>
      </div>
    </>
  );
}

export default App;
