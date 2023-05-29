import React, { useState } from 'react'

function Contacts(props) {
    // const contacts = props.contacts; this can be used too
    const title = props.title
  return (
    <div>
        <h1>{title}</h1>
       <div className ="mycontacts">
      {props.contacts.map((contact, index) => (
          <div key={index} className ="mycontact">
            <p>Name: {contact.name}</p>
            <p>Phone Number: {contact.phoneNumber}</p>
            <p>Location: {contact.location}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts
