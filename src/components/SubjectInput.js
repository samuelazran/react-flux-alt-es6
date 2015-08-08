'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './subject-input.css';


class SubjectInput extends React.Component {

  handleClick() {
    console.log('handleClick');
    var textBoxElement = ReactDom.findDOMNode(this.refs.textBox);
    var text = textBoxElement.value.trim();
    console.log('textBox', text);
    if (this.props.onGreet) {
      this.props.onGreet(text);
    }
    textBoxElement.focus();
  }

  render() {
    return (
      <div className="subject-input">
        <input className="subject-input__text-box" ref="textBox" placeholder="Enter your name" />
		<button className="subject-input__greet-button" onClick={this.handleClick.bind(this)}>Greet</button>
      </div>
    );
  }

}


export default SubjectInput;
