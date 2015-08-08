'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './components/Greeter';

const mountNode = document.getElementById('root');

ReactDOM.render(
  <Greeter greetSubject="world" />,
  mountNode
);
