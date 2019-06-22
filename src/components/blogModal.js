import React from 'react';
import {Modal} from 'react-bootstrap';


export default  class BlogModal extends React.Component {
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
          <a className="font-weight-bold" onClick={this.handleShow} style={{color: `hsl(350,100%,70%)`}} href="#1">Continue reading...</a>
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
              {this.props.blog.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <strong>Description</strong><br/>
              <p>{this.props.blog.description}</p>
            </div>

            <div>
              <strong>Explanation</strong><br/>
              <p style={{whiteSpace: `pre-line`}}>{this.props.blog.explanation}</p>
            </div>

            <div>
              <strong>Categories</strong><br/>
              <p>
                                {this.props.blog.categories.map((value, index) => {
                                    return <span key={index} className="badge badge-pill badge-danger "> {value} </span>
                                })}
              </p>
            </div>


            <div>
              <strong>Published Date</strong><br/>
              <p>{this.props.blog.dateCreated.split("T")[0]}</p>
            </div>

            <div>
              <strong>References</strong><br/>
              <ul>
                                {this.props.blog.references.map((value, index) => {
                                    return <li key={index}>
                                        <a href={value.link} target="_blank" rel="noopener noreferrer">{value.name}</a>
                                    </li>
                                })}
              </ul>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}