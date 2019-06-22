import React from 'react';
import {Modal} from 'react-bootstrap';


export default  class ProjectModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    
    return (
      <>
        <p className="lead mb-0">
          <a className="font-weight-bold" onClick={this.handleShow} href="#1">More Info...</a>
        </p>
        

        <Modal
        size="lg"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          scrollable="true"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {this.props.project.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <strong>Description</strong><br/>
              <p>{this.props.project.description}</p>
            </div>

            <div>
              <strong>Technologies</strong><br/>
              <p>
                                {this.props.project.technology.map((value, index) => {
                                    return <span key={index} className="badge badge-pill btn btn-outline-secondary"> {value} </span>
                                })}
              </p>
            </div>

            <div>
              <strong>Explanation</strong><br/>
              <p style={{whiteSpace: `pre-line`}}>{this.props.project.explanation}</p>
            </div>

            <div>
              <strong>Collaborators</strong><br/>
              <p>
                                {this.props.project.collaborators.map((value, index) => {
                                    return <span key={index} className="badge badge-pill badge-primary "> {value} </span>
                                })}
              </p>
            </div>


            <div>
              <strong>Start Date</strong><br/>
              <p>{this.props.project.startDate.split("T")[0]}</p>
            </div>

              {this.props.project.endDate &&
            <div>
              <strong>Completion Date</strong><br/>
              <p>{this.props.project.endDate.split("T")[0]}</p>
            </div>}

            <div>
              <strong>Future Road Map</strong><br/>
              <ul>
                                {this.props.project.roadMap.map((value, index) => {
                                    return <li key={index}> {value} </li>
                                })}
              </ul>
            </div>

            <div className="center">
              <div className="col-4 text-center">

                <a className="btn btn-block btn-social btn-github btn-sm" href={this.props.project.gitURL} target="_blank"
                                    rel="noopener noreferrer">
                  <span className="fa fa-github"/> Git URL
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}