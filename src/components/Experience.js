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
            veevalogo:{
                url: "https://www.veeva.com/",
                alt: "Veeva Systems",
                source: require ("../images/veevalogo.png")
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
                automation : "Automation"
            },
            
        }
    }
    render(){
      return(
          
          <div className = "container">
              <Heading heading = {this.state.header.heading} />
              <Logo url = {this.state.veevalogo.url} alt = {this.state.veevalogo.alt} img = {this.state.veevalogo.source}/>
          <div className ="info2">
            <ul className = "Role">
                <li>Software QA Engineer</li>
                <li>Veeva Systems - Pleasanton, CA</li>
                <li>July 2019 - Present</li>
            </ul>
        </div>
        <div className = "desc">
            <p>
                &gt; Created and modied Java methods to support both UI and API testing of the application platform
                <li>* Performed root cause analysis on failing automation, fixing issues with existing Java methods and Cucumber feature files</li>
                <li>* Increased automation coverage by identifying and automating test cases for production issues and regressions</li>
                <li>* Tested data creation with Java programs using Veeva’s Vault Java SDK, which triggered whenever existing data was modified</li>
                &gt; Executed test cases, and reported tickets for defects which included reproduction steps and server logs
                <li>* Designed test plans and scenarios using requirements outlined in Epics’ Implementation Documents</li>
                <li></li>
                &gt; Actively participated in Daily Scrum and Design Documentation review meetings
            </p>
            
            
        </div>
        <div className = "filler"></div>
        <div className = "usedtags">
            <Tag tag = {this.state.tags.java}/>
            <div className = "space"></div>
            <Tag tag = {this.state.tags.automation}/>
        </div> 
        <div className = "filler"></div> 
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
                &gt; Researched and developed a Continuous Integration and Continuous Delivery Pipeline, to optimize the build and release process:
                <li>* Integrated Ant build scripts with Jenkins, which reduced inconsistencies with following general guidelines and dependencies</li>
                <li>* Improved efficiency of root cause analysis and debugging by encouraging smaller changes to the source code more often instead of committing bigger changes infrequently</li>
                &gt; Increased software quality of a web application called EDAontap by testing successful builds through automated UI interaction using Katalon Studio
                <li>* Tests were functional/UI tests, such as: clicking, locating, typing, verifying completion of downloads, and entering different links/texts/search bar on different pages</li>
                <li></li>
                &gt; Participated in team meetings to demo sequential steps of the pipeline, and receive/provide feedback
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
                &gt; Deployed Windows images using Microsoft Deployment Toolkit
                <li></li>
                &gt; Troubleshot hardware and software problems that stemmed from using MDT
                <li></li>
                &gt; Performed regular validation on newly deployed images, to ensure deployments completed according to configuration settings
            </p>  
        </div>
        <div className = "usedtags">
            <Tag tag = {this.state.tags.windows}/>
        </div>
        </div>
      )
    }
  } 