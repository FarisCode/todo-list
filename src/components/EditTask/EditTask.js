import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import Auxi from '../../hoc/Auxi';
import Adder from '../Adder/Adder';
import './EditTask.css'

export default props => {
  let customStyles = {};
  if (props.theme === 'dark') {
    customStyles = {
      backgroundColor: "#252526",
      color: '#878787',
      boxShadow: '1px 1px 25px #171515',
    }
  }
  return (
    <Auxi>
      <Backdrop backdropClick={props.backdropClick} abs />
      <div className='editTask' style={customStyles}>
        <p>Edit Task!</p>
        <Adder
          theme={props.theme}
          value={props.adderValue}
          changeHandler={props.editChange}
          valid={props.valid}
          addClick={props.addClick}
        />
      </div>
    </Auxi>
  )
}
