import React, { Component } from 'react';
import ProjectModal from './projectModal';

export default class ProjectsItem extends Component {

    render() {
        return (
            <div className="Project">
                
                    <div className="card mb-3 mr-6 ml-6 mt-3">
                        <div className="card-header">
                            <h3 className="text-dark">{this.props.project.name}</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.project.description}</h5>
                            <p className="card-text" style={{whiteSpace: `pre-line`}}>{this.props.project.explanation.substring(0, 500)}...</p>
                            <div className="float-right">
                                <ProjectModal project={this.props.project}/>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            <div className="row">
                                <div className="col-3">
                                    <div className="float-left">
                                    {this.props.project.technology.map((value, index) => {
                                        return <span key={index} className="badge badge-pill btn btn-outline-secondary"> {value} </span>
                                    })}
                                    </div>
                                </div>

                                <div className="col-3">
                                    <div className="col-6">
                                    <a className="btn btn-block btn-social btn-github btn-sm" style={{color:'#000000', backgroundColor:'#FFFFFF'}}
                                       href={this.props.project.gitURL} target="_blank" rel="noopener noreferrer">
                                        <span className="fa fa-github"/> Git URL
                                    </a>
                                    </div>
                                </div>

                                <div className="col-3">Team Size: <strong>{this.props.project.collaborators.length}</strong></div>

                                <div className="col-3">Status:
                                    <strong>
                                        {this.props.project.endDate ?
                                            <span className="text-secondary">Completed</span> : <span className="text-info">In-Progress</span>}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        );
      }

}

