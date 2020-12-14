import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import Tasks from "./containers/Tasks/Tasks";
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actionCreators';

class App extends Component {
  render() {
    const darkTheme = this.props.theme === 'dark';
    return (
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: darkTheme ? '#1E1E1E' : '#00d192',
      }}>
        <Modal theme={this.props.theme}>
          <Tasks theme={this.props.theme} />
        </Modal>
        <div
          className="theme-toggle"
          style={{
            color: darkTheme ? '#878787' : '#000'
          }}
          onClick={() => {
            let update = darkTheme ? 'light' : 'dark';
            this.props.setTheme(update);
            localStorage.setItem('reactiveTodosTheme', update)
          }}
        >
          {darkTheme ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme
})

const mapDispatchToProps = dispatch => {
  return {
    setTheme: (val) => dispatch(actionCreators.setTheme(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
