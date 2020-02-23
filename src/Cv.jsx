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
          <div className="ui main container">
            <div className="ui header">{cv.company}</div>
            <div className="position">{cv.position}</div>
            <div className="description">{cv.description}</div>
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
