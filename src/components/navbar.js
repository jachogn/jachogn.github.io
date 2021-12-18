import React from 'react';
import '../css/navbar.css';
import {Link,BrowserRouter} from 'react-router-dom';

export default class Navbar extends React.Component{
    
    render(){
        const logo = require('../images/Logo.png');
        return(
            <header className = "Navbar">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <nav className = "Nav">
                    <div className = "Nav-Logo">
                    
                     <Link to = '/'><img alt="Joshua Chong" src={logo}></img></Link>       
                    
                    </div>
                    <div className = "space"></div>
                    
                    <div className = "Nav-Item">
                        <ul>
                            <li><Link to = '/education'> Education </Link></li>
                            <li><Link to = '/experience'> Experience </Link></li>
                            <li><Link to = '/projects'> Projects </Link></li>
                        </ul>
                    </div>
                    
                </nav>
            </header>
            
        )
    }
    
}
