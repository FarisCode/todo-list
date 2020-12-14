import React from 'react';
import './Modal.css';

const Modal = props => {
  let customStyles = {};
  if (props.theme === 'dark') {
    customStyles = {
      backgroundColor: "#252526",
      color: '#878787',
      boxShadow: '1px 1px 25px #171515',
    }
  }
  return (
    <div className='modal' style={customStyles}>
      {props.children}
    </div>
  )
}

export default Modal;