import React from 'react';

// LOCAL IMPORTS
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

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

export default IndecisionApp;