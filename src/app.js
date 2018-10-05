import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// LOCAL IMPORTS
import IndecisionApp from './components/IndecisionApp';

console.log('App Running!');

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
