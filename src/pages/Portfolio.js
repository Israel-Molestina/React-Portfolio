import React, { Component } from "react";

import projects from "../utils/projects.json";
import Card from "../components/Card";

class Portfolio extends Component {
  state = { projects };

  render() {
    return (
      <div>
        {/* <h1>hello</h1> */}
        {this.state.projects.map((project) => (
          <Card
            Key={project.Key}
            Title={project.Title}
            Descriptions={project.Descriptions}
            GitHub={project.GitHub}
            Application={project.Application}
            Image={project.Image}
            Alt={project.Alt}
          />
        ))}
      </div>
    );
  }
}

export default Portfolio;
