import React, { Component } from "react";
import axios from "axios";

class Cv extends Component {
  state = {
    cv: [
    ]
  };

  render() {
    const cv = this.state.cv;
    let cvList;

    if (cv.length > 0) {
      cvList = cv.map(cv => {
        return (
          <div className="ui main container container-about-text">
            <div className="ui header" id="cv-text">{cv.company}<div>{cv.position}</div><div>{cv.description}</div></div>
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        {cvList}
      </div>
    );
  }

  componentDidMount() {
    axios.get('./src/data/cv.json')
      .then(response => {
        this.setState({
          cv: response.data
        })
      })
  }
}

export default Cv;
