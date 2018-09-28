console.log('App Running!');

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <AddOption />
        <Options />
      </div>
    );
  };
};

class Header extends React.Component {
  render() {  
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer!</h2>
      </div>
    );
  };
};

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  };
};

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component here</p>
        <Option />
      </div>
    );
  };
};

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option Component here</p>
      </div>
    );
  };
};

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>AddOption Component here</p>
      </div>
    );
  };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
