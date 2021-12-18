import React from 'react';
import Tag from './Tag.js';
import Heading from './Heading.js';
import '../css/projects.css'


export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "Projects",
            expandi : {
                react: "React",
                hcss: "Html/CSS",
                fb: "Firebase",
                alt:"CI/CD",
                source: require("../images/expandi.f8bdb520.png"),
            },
            CICD : {
                Jenkins: "Jenkins",
                KS: "UI Testing",
                IT: "Integration Testing"
            }
            
        }
    }
    render(){
        return(
            <div className = "flexbox">
                <Heading heading = {this.state.header}/>
                <div className = "expandi">
                    <img alt = "Expandi Boardgame" src = {require("../images/expandi.f8bdb520.png")}>
                        </img>
                </div>
                <div className = "exp-info">
                    <h1>Expandi WebGame</h1>
                    <div className = "exp-tags">
                    <Tag tag = {this.state.expandi.react}/>
                    <div className = "filler1"></div>
                    <Tag tag = {this.state.expandi.hcss}/>
                    <div className = "filler1"></div>
                    <Tag tag = {this.state.expandi.fb}/>
                    </div>
                    
                    <div className = "exp-desc">
                        <p>
                            An online, multiplayer adaptation of the German board game "Gaia Project". Implementing
                            Implementing the game online would solve the challenges that come with the physical board game,
                            including, but not limited to: lengthy setup time, difficulty implementing randomness, and trouble
                            tracking game values.
                        </p>
                    </div>
                </div>
                <div className = "CI-CD">
                    <img alt = "CI/CD Pipeline" src = {require("../images/ci:cd.png")}> 
                    </img>
                </div>
                <div className = "CICD-info">
                    <h1>CI/CD Pipeline</h1>
                    <div className = "exp-tags">
                        <Tag tag = {this.state.CICD.Jenkins}/>
                        <div className = "filler1"></div>
                        <Tag tag = {this.state.CICD.KS}/>
                        <div className = "filler1"></div>
                        <Tag tag = {this.state.CICD.IT}/>
                    </div>
                    <div className ="CICD-desc">
                    <p>
                        Using Jenkins as a Continuous Integration server, I was able to integrate build scripts, automated
                        UI tests, and automated deployment. After detecting a change to the source code, I configured Jenkins
                        to automatically pull the source code and run an ANT build script. After a successful build, Jenkins would automatically
                        deploy the Websphere based application to the staging environment. Using a Jenkins agent, I then triggered
                        automated UI/functional tests through Katalon Studio. 
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}