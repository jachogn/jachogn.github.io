import React from 'react';
import '../css/experience.css'
import Heading from './Heading.js';
import Tag from './Tag';
import Logo from './Logo';


export default class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: {
                heading: "Experience",
            },
            usflogo:{
                url: "https://www.usfca.edu/",
                alt:"University of San Francisco",
                source: require("../images/usflogo.jpeg"),
            },
            cadencelogo:{
                url: "https://www.cadence.com/en_US/home.html",
                alt:"Cadence Design Systems",
                source: require("../images/cadencelogo.png"),
            },
            tags:{
                windows : "Windows",
                java : "Java",
                jenkins: "Jenkins",
                KS: "Katalon Studio",
                jlink: "https://www.jenkins.io/",
                klink: "https://www.katalon.com/",
            },
            
        }
    }
    render(){
      return(
          <div className = "container">
              <Heading heading = {this.state.header.heading} />  
              <Logo url = {this.state.cadencelogo.url} alt = {this.state.cadencelogo.alt} img = {this.state.cadencelogo.source}/>
          <div className ="info2">
            <ul className = "Role">
                <li>Software Developer Intern</li>
                <li>Cadence Design Systems - San Jose, CA</li>
                <li>June 2018 - August 2018</li>
            </ul>
        </div>
        <div className = "desc">
            <p>
                > Researched and developed a Continuous Integration and Continuous Delivery Pipeline, to optimize the build and release process:
                <li>* Integrated Ant build scripts with Jenkins, which reduced inconsistencies with following general guidelines and dependencies</li>
                <li>* Improved efficiency of root cause analysis and debugging by encouraging smaller changes to the source code more often instead of committing bigger changes infrequently</li>
                > Increased software quality of a web application called EDAontap by testing successful builds through automated UI interaction using Katalon Studio
                <li>* Tests were functional/UI tests, such as: clicking, locating, typing, verifying completion of downloads, and entering different links/texts/search bar on different pages</li>
                <li></li>
                > Participated in team meetings to demo sequential steps of the pipeline, and receive/provide feedback
            </p>
            
            
        </div>
        <div className = "filler"></div>
        <div className = "usedtags">
            <Tag tag = {this.state.tags.java}/>
            <div className = "space"></div>
            <Tag link = {this.state.tags.jlink} tag = {this.state.tags.jenkins}/>
            <div className = "space"></div>
            <Tag link = {this.state.tags.klink} tag = {this.state.tags.KS}/> 
        </div>
        <div className = "filler"></div>
        <Logo url = {this.state.usflogo.url} alt = {this.state.usflogo.alt} img = {this.state.usflogo.source}/>
        <div className ="info2">
            <ul className = "Role">
                <li>Student Desktop Specialist</li>
                <li>University of San Francisco - San Francisco, CA</li>
                <li>August 2016 - April 2019</li>
            </ul>
        </div>
        <div className = "desc">
            <p>
                > Deployed Windows images using Microsoft Deployment Toolkit
                <li></li>
                > Troubleshot hardware and software problems that stemmed from using MDT
                <li></li>
                > Performed regular validation on newly deployed images, to ensure deployments completed according to configuration settings
            </p>  
        </div>
        <div className = "usedtags">
            <Tag tag = {this.state.tags.windows}/>
        </div>
        </div>
      )
    }
  } 