import React, { Component } from 'react';
import ReactDOM from 'react-dom';


let App = React.createClass({
  getInitialState: function() {
    return {
      todos: []
    };
  },
  componentDidMount () {
    fetch('todos')
    .then(res => res.json())
    .then(todos => (this.setState({todos})));
  },
  render: function() {
    return (
      <div className = "container todo-list">
        <h1>My ToDo List</h1>
        <h2>Tasks:</h2>
        <ul>
            {this.state.todos.map(todos => 
            <li>
            {todos.body}
            </li>
            )}
        </ul>
      </div>);
  
  }
})
module.exports = App;

ReactDOM.render(<App />, document.getElementById('root'));
