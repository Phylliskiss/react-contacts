// import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import { Col, Row } from "react-bootstrap";

function App() {
  const [contacts, setContacts] = useState([
    { name: " phylia", phoneNumber: "+23324566666666", location: "Accra" },
    { name: " Chidera", phoneNumber: "+233245666oo666", location: "East" }
  ]);

  const getData = (data) => {
      setContacts([...contacts, data])
  }

  return (
    <>
      <div className="">
      <Row>
        <Col md={6}>
          <ContactsForm getData={getData} title='Personal Data' />
        </Col>
        <Col md={6}>
          <Contacts contacts={contacts} title='Users' />
        </Col>
      </Row>
      </div>
    </>
  );
}

export default App;
