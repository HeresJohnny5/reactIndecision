console.log('App Running!');

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: [],
    };
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      };
    } catch(e) {
      // Do nothing at all
      console.log('Error', e);
    };
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('this.state.options:', this.state.options);

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log('json', json);

      localStorage.setItem('options', json);
    }; 
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  };

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption(optiontoRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(option => option !== optiontoRemove),
      };
    });
  };

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item.';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.';
    } 

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer!'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  };
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map(option => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText} 
      <button onClick={() => {props.handleDeleteOption(props.optionText)}}>Remove</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      error: undefined,
    };
  };

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
