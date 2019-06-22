import React, { Component } from 'react';
import BlogModal from './blogModal';

export default class BlogsItem extends Component {
    render() {
        return (
            <div className="Project mw-50">
                
                    <div className="card">
                        <div className="card-header">
                            <h3>{this.props.blog.name}</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.blog.description}</h5>
                            <p className="card-text" style={{whiteSpace: `pre-line`}}>{this.props.blog.explanation.substring(0, 300)}...</p>
                            <div>
                                <div className="float-left">
                                <strong>Categories:</strong>
                                {this.props.blog.categories.map((value, index) => {
                                    return <span key={index} className="badge badge-pill"> {value} </span>
                                })}
                                </div>
                            </div>
                            <div className="float-right">
                                <BlogModal blog={this.props.blog}/>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                                <div><strong>Published Date:</strong> 
                                    {this.props.blog.dateCreated.split("T")[0]}
                                </div>
                        </div>
                    </div>
                
            </div>
        );
      }

}