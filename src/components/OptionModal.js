import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeSelectedOption}
    contentLabel={"Selected Option"}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.closeSelectedOption}>OK</button>
  </Modal>
);

export default OptionModal;