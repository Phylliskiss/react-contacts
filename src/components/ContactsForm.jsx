import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export class ContactsForm extends Component {
  title = this.props.title
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      contact: '',
      location: '',
    }
  }
  

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ 
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      // console.log(this.state)
      this.props.getData(this.state)
    }
  
  render() {
    return (
      <div className='myforms'>
        <h1>{this.title}</h1>
        <Form onSubmit={this.handleSubmit} >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  className='input' name="name" onChange={this.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter number" className='input' name="contact" onChange={this.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter location" className='input' name="location" onChange={this.handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className='btn'>
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}

export default ContactsForm
