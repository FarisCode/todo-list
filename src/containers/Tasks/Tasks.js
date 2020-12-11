import React, { Component } from 'react'
import './Tasks.css';
import Task from '../../components/Task/Task';
import Auxi from '../../hoc/Auxi';
import Adder from '../../components/Adder/Adder';
import EditTask from '../../components/EditTask/EditTask';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

class Tasks extends Component {
    state = {
        adderValue: '',
        editAdderValue: ''
    }
    adderOnChangeHandler = (event) => {
        this.setState({ adderValue: event.target.value });
        this.props.setinValid(false);
    }
    //for adding new task!
    taskAddHandler = (value) => {
        let tasks = [...this.props.tasks];
        const val = value.trim();
        if (val !== '') {
            if (this.props.editId !== null) {
                tasks[this.props.editId] = {
                    task: val,
                    done: false
                };
                this.props.tasksStateOverwrite([...tasks]);
                this.props.setEditId(null);
            } else {
                tasks.push({
                    task: val,
                    done: false
                });
                this.props.tasksStateOverwrite([...tasks]);
            }
            this.setState({ adderValue: '' });
        } else if (this.props.editId !== null) {
            this.setState({ editAdderValue: '' });
            this.props.setEditinValid(true);
        } else {
            this.setState({ adderValue: '' });
            this.props.setinValid(true);
        }
        localStorage.setItem('reactiveTodosTasks', JSON.stringify(tasks));
    }
    taskClickedHandler = (event, id) => {
        event.stopPropagation();
        let tasks = [...this.props.tasks];
        tasks[id] = { ...this.props.tasks[id] }
        tasks[id].done = !this.props.tasks[id].done;
        this.props.tasksStateOverwrite([...tasks]);
        localStorage.setItem('reactiveTodosTasks', JSON.stringify(tasks));

    }
    taskEditClickHandler = (id) => {
        this.setState({
            backdrop: true,
            editAdderValue: this.props.tasks[id].task
        });
        this.props.setEditId(id);
    }
    taskDeleteHandler = (id) => {
        let tasks = this.props.tasks.filter((element, index) => {
            return index !== id;
        });
        this.props.tasksStateOverwrite([...tasks]);
        localStorage.setItem('reactiveTodosTasks', JSON.stringify(tasks));
    }
    backdropClickHandler = () => {
        this.props.setEditId(null);
        this.props.setEditinValid(false);
    }
    render() {
        return (
            <Auxi>
                {
                    this.props.editId !== null
                        ? <EditTask
                            backdropClick={this.backdropClickHandler}
                            adderValue={this.state.editAdderValue}
                            editChange={(event) => { this.setState({ editAdderValue: event.target.value }); this.props.setEditinValid(false) }}
                            valid={!this.props.editInvalid}
                            addClick={this.taskAddHandler}
                        />
                        : null
                }
                <div className='header'>
                    <h2 style={{ textAlign: "center", fontWeight: 'normal', height: '68px', lineHeight: '68px', margin: '0' }}>Today's TODO Lists</h2>
                    <Adder
                        value={this.state.adderValue}
                        changeHandler={this.adderOnChangeHandler}
                        valid={!this.props.invalid}
                        addClick={this.taskAddHandler}
                    />
                </div>
                <div className='tasks'>
                    {this.props.tasks.length > 0 ? [...this.props.tasks].reverse().map((todo, index) => {

                        const inverseInd = this.props.tasks.length - 1 - index;
                        return <Task
                            key={index}
                            des={todo.task}
                            done={todo.done}
                            editClick={() => { this.taskEditClickHandler(inverseInd) }}
                            id={inverseInd}
                            taskDel={() => this.taskDeleteHandler(inverseInd)}
                            taskClick={(event) => { this.taskClickedHandler(event, inverseInd) }} />
                    }) : <div
                        style={{
                            fontSize: '1.4em',
                            color: '#999',
                            textAlign: 'center',
                            marginTop: '25px'
                        }}>Add Some Tasks</div>}
                </div>
            </Auxi>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.todo,
    invalid: state.invalidInput,
    editId: state.currEditId,
    editInvalid: state.editInvalidInput
})

const mapDispatchToProps = dispatch => {
    return {
        setinValid: (val) => dispatch(actionCreators.invalid(val)),
        setEditinValid: (val) => dispatch(actionCreators.editInvalid(val)),
        setEditId: (id) => dispatch(actionCreators.editID(id)),
        tasksStateOverwrite: (tasks) => dispatch(actionCreators.taskOverWrite(tasks))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Tasks);