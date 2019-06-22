import React, { Component } from 'react';
import ProjectItem from './projectsItem';
import axios from 'axios';

export default class Projects extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          projects: []
        };
      }



    componentDidMount(){
        this.getProjects();
    }

    getProjects(){
        axios.get(`http://localhost:3000/api/v1.0/projects`)
        .then(res => {
          this.setState({projects: res.data.body});
        })
      }

    render() {
        let projectItems;
        if(this.state.projects){
            projectItems = this.state.projects.map(project => {
                return (
                    <ProjectItem key={project._id} project={project}/>
                );
            });
        }
        return (
            <div className="Projects mr-5 ml-5">
                <div className="jumbotron jumbotron-fluid rounded">
                  <div className="container">
                    <h1 className="display-4 font-italic" style={{color: `rgb(88, 125, 249)`, 'fontSize': `80px`}}>Personal and Academic Projects</h1>
                    <p className="lead"><i> I am a self-starter willing and able to work independently or in a team setting focusing on projects success.
                        I am open to working on a wide variety of technological projects.
                        If you would like to discuss on any projects leave a comment using contact me form.</i></p>
                  </div>
                </div>
                {projectItems}
            </div>
        );
      }

}