import React from 'react'
import '../css/projpage.css'
import {motion} from "framer-motion"
import Projects from './Projects.js';
import {fadeTransition} from '../App'

export default class ProjectPage extends React.Component{
    render(){
      return(
        <motion.div  exit="out" animate="in" initial="out" variants={fadeTransition}>
        
        <div className = "box3">
          <Projects/>
        </div>
        </motion.div>
      )
    }
  } 