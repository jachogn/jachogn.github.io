import React from 'react';
import ReactDOM from 'react-dom';
import '../css/logo.css'

export default class Logo extends React.Component{
    render(){
        return(
            <div className = "logo">
              <a href = {this.props.url}> <img alt= {this.props.alt} src= {this.props.img}></img></a>
               
            </div>
        )
    }
}