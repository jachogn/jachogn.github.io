import React from 'react';
import {Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home'
import Education from './components/EducationPage'
import Experience from './components/ExperiencePage'
import Projects from './components/ProjectPage'
import Nav from './components/navbar'
import {AnimatePresence} from "framer-motion"
import './css/App.css'


export const fadeTransition ={
    in:{
        opacity:"100%",
    },
    out:{
        opacity:"0%",
    }
}


export const pageTransition = {
    in:{
        opacity:"100%",
        y:0
    },
    out:{
        opacity:"0%",
        y:"-100vh"
    }
}
function App () {

    const location = useLocation();


    return (
        <div className = "App">
        <main>
        <Nav/>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key ={location.pathname}> 
                    <Route path="/" component={Home} exact />
                    <Route path="/education" component={Education}  />
                    <Route path="/experience" component={Experience} />
                    <Route path="/projects" component={Projects} />
                    <Route component={Error} />
                </Switch>
            </AnimatePresence>

        </main>
        </div>
    );
}
export default App; 



  // ========================================
  
  