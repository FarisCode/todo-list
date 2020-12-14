import React from 'react';
import './Task.css'
export default props => {
  let desStyle = {
    fontSize: '0.9em',
    width: '80%',
    height: '100%',
    lineHeight: '40px',
  }
  if (props.done) {
    desStyle = {
      fontSize: '0.7em',
      textDecoration: 'line-through',
      opacity: '0.5',
      width: '80%',
      lineHeight: '40px'
    }
  }
  let taskZIndex = null;
  if (props.edit) {
    taskZIndex = { zIndex: 200 };
  }
  if (props.theme === 'dark') {
    taskZIndex = taskZIndex ? {
      ...taskZIndex,
      borderBottom: '1px solid #8787872b',
    } : {
        borderBottom: '1px solid #8787872b',
      };
  }
  return (
    <div className='task' style={taskZIndex}>
      <div className='text' style={desStyle} onClick={props.taskClick} >
        {props.des}
      </div>
      <div>
        {
          !props.done
            ? <i
              className="fas fa-pencil-alt"
              onClick={props.editClick}
              style={{
                color: '#8a0d1c',
                margin: '0 5px',
                fontSize: '0.8em'
              }}></i>
            : null
        }
        <i className="fas fa-times" onClick={props.taskDel} style={{ color: '#8a0d1c', margin: '0 5px', fontSize: '0.9em' }}></i>
      </div>
    </div>
  );
}
