import React, { Component } from 'react';
import InfoData from '../info.json';
import vtuImage from './img/VTU.png';
import syracuseImage from './img/syracuse.png';
import resume from './Pavan_Resume.pdf';
import huaweiLogo from './img/Huawei_Logo.JPG';
import senseiLogo from './img/sensei.png';
import mediTechSafeLogo from './img/MediTechSafeLogo2.png';

export default class Portfolio extends Component {

    render() {


        return (
            <div className="Portfolio mr-5 ml-5">
                <div className="jumbotron jumbotron-fluid rounded">
                    <div className="container">
                        <h1 className="display-4"><strong>EDUCATION</strong></h1>
                        <hr/>
                        <School key={InfoData.schoolData.Syracuse._id} school={InfoData.schoolData.Syracuse} image={syracuseImage}/>
                        <School key={InfoData.schoolData.VTU._id} school={InfoData.schoolData.VTU} image={vtuImage}/>
                    </div>
                </div>


                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2><strong>SKILLS</strong></h2>
                            <hr style={{color: `#FFFFFF`, backgroundColor: `#FFFFFF`}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="no-bullets">
                                <li>
                                    <span className="ability-title">Java</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-half-full" aria-hidden="true"/>
                                    </span>
                                </li>
                                <li>
                                    <span className="ability-title">NodeJS</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">C++</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">MySQL</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">HTML5</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>


                                <li>
                                    <span className="ability-title">Express Framework</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-half-full" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">VCS/HACS Cluster</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="no-bullets">

                                <li>
                                    <span className="ability-title">Bootstrap</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">CSS/CSS3</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">Shell Scripting</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-half-full" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">MongoDB</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">AngularJS</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-half-full" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="ability-title">Heruko</span>
                                    <span className="ability-score">
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star" aria-hidden="true"/>
                                            <i className="fa fa-star-half-full" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                            <i className="fa fa-star-o" aria-hidden="true"/>
                                        </span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12 col-lg-offset-2 text-center text-white ">
                            <a href={resume} target="_blank" className="btn btn-lg btn-outline btn-outline-secondary text-white" rel="noopener noreferrer">
                                <i className="fa fa-download"/> Download Resume
                            </a>
                        </div>
                    </div>
                </div>
                </div>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2><strong>EXPERIENCE</strong></h2>
                            <hr className="star-primary"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive center" height="160" width="200" src={mediTechSafeLogo} alt="MediTechSafe"/>
                            <h4>MediTechSafe Inc.</h4>
                            <p>Full Stack Developer Intern | May 2018 - Aug 2018</p>
                            <br/>
                        </div>
                    </div>
                    <div className="row">

                        <ul className="role">
                            <li>Developed loosely coupled cross-platform web application to track and manage medical devices using Spring Boot and Go.</li>
                            <li>Integrated features like JWT for authentication, go-routine for parallel execution, gorm for object relation model, ajax to
                                download PDF file, gofpdf for pdf file creation and REST API’s for cross product access.</li>
                            <li>Removed dependency of using Activity framework by building own customized workflow module to assign, maintain task
                                flow and trace them at each stage of the flow.</li>
                        </ul>

                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive center" height="160" width="200" src={huaweiLogo} alt="Huawei"/>
                                <h4>Huawei Technologies India Pvt. Ltd.</h4>
                                <p>Senior Technical Engineer | Jan 2014 - Jul 2017</p>
                                <br/>
                        </div>
                    </div>
                    <div className="row">

                            <ul className="role">
                                <li>Designed and developed business logic using Java and Groovy for Spin ONO, Netherland KPN Arrow, Venezuela Movilnet, Indonesia XL and Togo TGT projects. </li>
                                <li>Resolved database access performance issue in production system using various debugging tools like IBM Thread and Monitor Dump Analyzer and JConsole which resulted in performance improvement, reducing the execution time from 10 instructions/minute to 32 instructions/minute. </li>
                                <li>Debugged GDR (Geographical Disaster Recovery) issue where switching from Disaster Recovery node to Production node was not successful because of float IP implementation logic in Argentina TI project.</li>
                                <li>Honored with spot award as Best Technical Contributor of the Month for solving critical production issue with memory using GC log. </li>
                            </ul>

                    </div>

                    <br/>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <img className="img-responsive center" height="160" width="200" src={senseiLogo} alt="Sensei"/>
                                    <h4>Sen-Sei Technologies</h4>
                                    <p>Software Engineering Intern | Jan 2013 - Aug 2013</p>
                                    <br/>
                            </div>
                        </div>
                        <div className="row">
                                <ul className="role">
                                    <li>Designed and developed an Android application Story Genie with key feature being auto play and auto scroll using technologies such as JSON, Android and HTML</li>
                                </ul>
                        </div>

                </div>



                
            </div>
        );
      }

}

class School extends Component {
    render(){
        return (
            <div className="row">
                <div className="col-4">
                    <img src={this.props.image} width="130" height="130" className="pull-right" alt="School Logo"/>
                </div>
                <div className="col-6">
                    <h2>{this.props.school.name}</h2>
                    <h5>{this.props.school.degreeField}</h5>
                    <h6>{this.props.school.fromYear}
                        {this.props.school.toYear && <span> - {this.props.school.toYear}</span>}
                    </h6>
                    <span style={{whiteSpace: `pre-line`}}>
                        {this.props.school.description}
                    </span>
                </div>
            </div>
        );
    }
}