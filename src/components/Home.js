import React from 'react';
import '../css/home.css';
import {motion} from "framer-motion"
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {pageTransition} from '../App'

export default class Home extends React.Component{
  render(){
    return(
        <motion.div exit= "out" animate= "in" initial= "out" variants ={pageTransition}>
          
        
        <div className ="socials">
        <ul>
          <li><SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="5" roundness="20%" url="https://www.linkedin.com/in/joshuaachong/" size="50" /></li>
          <li><SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(20,21,21,0)" iconSize="5" roundness="20%" url="https://github.com/jachogn" size="50" /></li>
          <div className="spaces"></div>
          <li><SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(20,21,21,0)" iconSize="5" roundness="20%" url="mailto: jachong19@gmail.com" size="50" /></li>
          <li><SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(20,21,21,0)" iconSize="5" roundness="20%" url="https://www.instagram.com/joshchong97/?hl=en" size="50" /></li>
        </ul>
        </div>
      </motion.div>
    )
  }
  
}
