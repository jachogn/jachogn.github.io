import React from 'react';
import '../css/educationbox.css';
import Heading from './Heading.js';
import Tag from './Tag';
import Logo from './Logo';

export default class Education extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          header:{
            heading : "Education",
          },
          logo:{
            url: "https://www.usfca.edu/",
            alt:"University of San Francisco",
            source: require("../images/usflogo.jpeg"),
          },
          tag : "Kasamahan",
          link: "https://usfkasamahan.org/",
        };
      }
    render(){
        return(
            <div className = "container">
              <Heading heading = {this.state.header.heading} />  
              <Logo url = {this.state.logo.url} alt = {this.state.logo.alt} img = {this.state.logo.source}/>
            <div className ="info">
              <ul className = "education-items">
                <li>University of San Francisco</li>
                <li>Bachelor of Science, Computer Science</li>
                <li>Class of 2019</li>
              </ul>
            </div>
            <div className = "courses">
              <h1>Relevant Coursework:</h1>
              <p>Python, Java, Parallel Programming, Data Structures and Algorithms, Discrete Math, Linear Algebra, Automata Theory, Software Development, UX/UI Design, Operating Systems, Computer Architecture</p>
            </div>
            <div className ="tags">
              <div className = "KA">
            <Tag link = {this.state.link} tag = {this.state.tag}/>
            </div>
            </div>
          </div>
        )
    }
}