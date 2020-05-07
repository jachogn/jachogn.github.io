import React from 'react';
import '../css/exppage.css'
import {motion} from "framer-motion"
import Experience from './Experience.js'
import {fadeTransition} from '../App'

export default class ExperiencePage extends React.Component{
    render(){
      return(
        <motion.div  exit="out" animate="in" initial="out" variants={fadeTransition}>
        
        <div className = "box2">
            <Experience/>
        </div>
        </motion.div>
      )
    }
  } 