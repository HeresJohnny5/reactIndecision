import React from 'react';

// LOCAL IMPORTS
import Option from './Option';

const Options = (props) => (
  <div>
    <button 
      className="button button--link" 
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.map(option => (
      <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.handleDeleteOption} 
      />
    ))
    }
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
  </div>
);

export default Options;