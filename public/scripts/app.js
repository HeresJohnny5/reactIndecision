'use strict';

console.log('App.js is running!');

// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);