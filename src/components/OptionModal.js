import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.closeSelectedOption}
    contentLabel={"Selected Option"}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.closeSelectedOption}>OK</button>
  </Modal>
);

export default OptionModal;