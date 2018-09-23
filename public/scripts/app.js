console.log('App.js is running!');

// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  "p",
  { id: "testId" },
  "This is JSX from app.js!"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);