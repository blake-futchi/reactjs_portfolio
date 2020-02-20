import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  state = {
    projects: [
    ]
  };

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div className="ui main container container-about-text">
            <div className="ui header">{project.description}</div>
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui main container container-about">
      <div className="hero-image hero-about" style={{ background: 'url("./src/img/me.jpg")', backgroundSize: 'cover', height: '100vh'}}>
        {projectsList}
      </div>
    </div>
        
      </div>
    );
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }
}

export default About;
