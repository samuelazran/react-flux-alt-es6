'use strict';

import React from 'react';
import './greeter.css';
import GreetingStore from '../stores/GreetingStore';
import GreetingActions from '../actions/GreetingActions';
import SubjectInput from '../components/SubjectInput';


function getState() {
  return {greetSubject: GreetingStore.getState().greetSubject};
}

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the store and passes the new data to its children.
 */

class Greeter extends React.Component {

  constructor(props) {
    super(props);
    var initial = {
		greetSubject: props.greetSubject || getState().greetSubject
	};
    this.state = initial;
    GreetingStore.listen(this.onChange.bind(this));
  }

  /**
  * Triggered in every change in the store
  */
  onChange() {
    console.log('onChange', getState());
    this.setState(getState());
  }

  /**
  * Perform action on GreetingActions
  */
  greet(greetSubject) {
    console.log('greet', greetSubject);
    if (greetSubject === 'world') {
      GreetingActions.greetWorld(greetSubject);
    } else {
      GreetingActions.greetUser(greetSubject);
    }
  }

  componentDidMount() {
    console.log('componentDidMount', this.state);
    this.greet(this.state.greetSubject);
  }

  render() {
    return (
      <div className="greeter">
        <h1>Hello {this.state.greetSubject}!</h1>
		<SubjectInput onGreet={this.greet} />
      </div>
    );
  }
}


export default Greeter;
