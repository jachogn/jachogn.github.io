import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading.js'
import '../css/skills.css';

export default class Skills extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        heading : "Skills",
    }
    }
    render(){
        return(
            <div className ="container2">
                <Heading heading = {this.state.heading} />
                <h2>Programming Languages</h2>
              <h3>Java, JavaScript/HTML/CSS, Python, C</h3>
            <div className = "filler"></div>
                <h2>Technologies</h2>
              <h3>React, Git, Cucumber, MySQL, IntelliJ, Kibana, JIRA, Firebase, Jenkins, Katalon Studio</h3>
          </div>
        )
    }
    
}