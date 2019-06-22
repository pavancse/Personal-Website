import React, { Component } from 'react';
import './App.css';
import About from './components/about';
import Contact from './components/contact'
import {Tabs, Tab} from 'react-bootstrap';
import Projects from './components/projects';
import Blogs from './components/blogs';
import Portfolio from './components/portfolio';



class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'about'
    };
  }

  

  render() {
    return (
      <div className="App">
      <header id="home">
        <nav id="nav-wrap">
            <Tabs className="justify-content-center navbar navbar-right navbar-expand-lg navbar-light bg-dark myTabsClass"
                  id="tabs" activeKey={this.state.key} onSelect={key => this.setState({ key })} >
                <Tab eventKey="about" title="About Me">
                    <About/>
                </Tab>
                <Tab eventKey="portfolio" title="Portfolio">
                    <Portfolio/>
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    <Projects/>
                </Tab>
                <Tab eventKey="blog" title="Blog">
                    <Blogs/>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact/>
                </Tab>
            </Tabs>
        </nav>
        </header>
      </div>
    );
  }
}

export default App;
