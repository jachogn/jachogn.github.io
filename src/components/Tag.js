import React from 'react';
import '../css/tag.css'


export default class Tag extends React.Component{
    render(){
        return(
            <div className="tagging">
              <a className="icon" target="_blank" href = {this.props.link}>{this.props.tag}</a>
            </div>
        )
    }
}