console.log('App Running!');

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: ['One', 'Two', 'Three'],
    };

    console.log('Options', this.state.options);
  };

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleDeleteOptions() {
    this.setState(() => { 
      return {
        options: [] 
      };
    });
  };

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
      this.setState((prevState) => { 
        console.log('prevState', prevState);
        return {
          options: [...prevState.options, option],
        };
      });
    } 

    e.target.elements.option.value = '';
  };

  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a computer!'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  };
};

class Header extends React.Component {
  render() {  
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  };
};

class Action extends React.Component {
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
      </div>
    );
  };
};

class Options extends React.Component {
  render() {
    console.log('Options Component', this.props.options);

    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => <Option key={option} optionText={option} />)}
      </div>
    );
  };
};

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  };
};

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
