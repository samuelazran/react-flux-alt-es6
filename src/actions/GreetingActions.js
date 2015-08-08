'use strict';

import alt from '../alt';


class GreetingActions {
  constructor() {
    this.generateActions(
      'greetWorld',
      'greetUser'
    );
  }
}


export default alt.createActions(GreetingActions);
