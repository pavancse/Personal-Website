import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import InfoData from '../info.json';

export default class Contact extends Component {
  constructor(props) {
        super(props);

        this.blankState = {
            name:  '',
            email: '',
            description: '',
            phoneNumber: '',
        };

      this.state = this.blankState;
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangePhonenum = this.handleChangePhonenum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangeDescription(event) {
    this.setState({description: event.target.value});
  }

  handleChangePhonenum(event) {
    this.setState({phoneNumber: event.target.value});
  }


  handleSubmit(event) {
   
    axios.post(`http://localhost:3000/api/v1.0/contact`, this.state);
    // .then(res => {
    //   console.log(res);
    //   console.log(res.data);
    //   alert('Submitted: ' + JSON.stringify(this.state));
    // });

    alert('Contact Information is posted successfully.');
    this.setState(this.blankState);
    
    event.preventDefault();
  }


  render() {
    // let infoData = this.props.infoData;
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
      
                    <h1 className="display-4 font-italic" style={{color: `rgb(15,157,88)`, 'fontSize': `80px`}}>Contact</h1>
                    <p><i>If you have a project in mind or are simply interested in knowning more, get in touch and let’s get things rolling.</i></p>
                    <div className="container">
                    <div className="row">
                      <div className="col-md-6 border-right">
                        <Form className="form-signin" onSubmit={this.handleSubmit}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label className="float-left">Name</Form.Label>
                              <Form.Control required onChange={this.handleChangeName} placeholder="Pavan N S" value={this.state.name}/>
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label className="float-left">Email address</Form.Label>
                              <Form.Control required onChange={this.handleChangeEmail} type="email" placeholder="name@example.com" value={this.state.email}/>
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label className="float-left">Phone Number</Form.Label>
                              <Form.Control onChange={this.handleChangePhonenum} placeholder="+1 (123)456-789" value={this.state.phoneNumber}/>
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label className="float-left">Description</Form.Label>
                              <Form.Control required as="textarea" value={this.state.description} onChange={this.handleChangeDescription}/>
                          </Form.Group>
                          <Button variant="success" type="submit">
                              Submit
                          </Button>
                        </Form>
                      </div>
                      <div className="col-md-6">
                        <p>Follow me on social networking sites to know more information on my day to day activities.</p>
                        <div className="row">
                            <div className="col-3"/>
                          <div className="col-6">
                            <a className="btn btn-block btn-social btn-md text-center btn-github" href={InfoData.URL.GitHub}
                            target="_blank" rel="noopener noreferrer">
                              <span className="fa fa-github "/> GitHub
                            </a>

                            <a className="btn btn-block btn-social btn-linkedin btn-md text-center" href={InfoData.URL.LinkedIn} 
                            target="_blank" rel="noopener noreferrer">
                              <span className="fa fa-linkedin "/> LinkedIn
                            </a>

                            <a className="btn btn-block btn-social btn-twitter btn-md text-center" href={InfoData.URL.Twitter} 
                            target="_blank" rel="noopener noreferrer">
                              <span className="fa fa-twitter "/> Twitter
                            </a>

                            <a className="btn btn-block btn-social btn-facebook btn-md text-center" href={InfoData.URL.Facebook} 
                            target="_blank" rel="noopener noreferrer">
                              <span className="fa fa-facebook "/> Facebook
                            </a>

                              <a className="btn btn-block btn-social btn-google btn-md text-center" href={"mailto:"+ InfoData.URL.Email}>
                                  <span className="fa fa-at"/> Email
                              </a>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>

        </div>
    );
  }
}