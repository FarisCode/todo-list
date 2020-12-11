import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import Auxi from '../../hoc/Auxi';
import Adder from '../Adder/Adder';
import './EditTask.css'

export default props => {
  return (
    <Auxi>
      <Backdrop backdropClick={props.backdropClick} abs />
      <div className='editTask'>
        <p>Edit Task!</p>
        <Adder
          value={props.adderValue}
          changeHandler={props.editChange}
          valid={props.valid}
          addClick={props.addClick}
        />
      </div>
    </Auxi>
  )
}
