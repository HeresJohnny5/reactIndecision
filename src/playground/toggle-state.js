console.log('App.js is running!');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onToggle = this.onToggle.bind(this);
    
    this.state = {
      title: 'Visibility Toggle',
      toggle: false,
    };
  };

  onToggle() {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      }
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.onToggle}>
          {this.state.toggle ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.toggle ? <p>Hey. These are some details you can now see!</p> : null}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));