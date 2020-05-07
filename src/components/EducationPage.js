import React from 'react';
import '../css/education.css'
import {motion} from "framer-motion"
import Skills from './Skills.js';
import Education from './Education.js';
import {fadeTransition} from '../App'

export default class EducationPage extends React.Component{
    render(){
      return(
        <motion.div exit= "out" animate= "in" initial= "out" variants ={fadeTransition}>
        
        <div className = "box">
          <Education/>
          <Skills/>
        </div>
        </motion.div>
      )
    }
  } 

  