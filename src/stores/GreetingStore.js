'use strict';

import alt from '../alt';
import GreetingActions from '../actions/GreetingActions';


class GreetingStore {

  constructor() {
    this.bindActions(GreetingActions);
    this.greetSubject = 'world';
  }

  greet(greetSubject) {
    console.log('GreetingStore::onGreet', greetSubject);
    this.greetSubject = greetSubject;
  }

  onGreetWorld() {
    console.log('GreetingStore::onGreetWorld');
    this.greet('world');
  }

  onGreetUser(greetSubject) {
    console.log('GreetingStore::onGreetUser', greetSubject);
    this.greet(greetSubject);
  }

}


export default alt.createStore(GreetingStore);
