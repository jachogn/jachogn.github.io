import React from 'react';
import ReactDOM from 'react-dom';
import '../css/heading.css';

export default class Heading extends React.Component{
    render(){
        return(
            <header className = "heading"> {this.props.heading} </header>
        )
    }
}