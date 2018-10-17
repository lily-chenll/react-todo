import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: 0,
      todoList: [],
      showFilter: 'all',
    };
  };

  addTodo = () => {
    if (this.input.value) {
      const lists = this.state.todoList;
      const todo = {
        id: this.state.itemId,
        value: this.input.value,
        completed: false,
      };
      this.setState({
        itemId: this.state.itemId + 1,
        todoList: [...lists, todo],
      });
      this.resetInput();
    }
  };

  resetInput = () => {
    this.input.value = '';    
  };

  handleClickTodo = (id) => {
    const list = this.state.todoList;
    list[id].completed = !list[id].completed;
    this.setState({
      todoList: list,
    });
  };

  changeStatus = (status) => {
    this.setState({
      showFilter: status,
    });
  };

  getStatusList = () => {
    const filter = this.state.showFilter;
    switch(filter) {
      default:
        return this.state.todoList;
      case 'all':
        return this.state.todoList;
      case 'active':
        return this.state.todoList.filter(item => !item.completed);
      case 'completed':
        return this.state.todoList.filter(item => item.completed);
    }
  };
 
  render() {
    const list = this.getStatusList().map((item) => {
      return (
        <li key={item.id} onClick={() => this.handleClickTodo(item.id) } className= {item.completed ? 'lineThrough' : ''}>{item.value}</li>
      )
    });

    return (
      <div className="App">
        <div className="searchContainer">
          <input
            size="45"
            ref={ (input) => {this.input = input} }>
          </input>
          <button onClick={ this.addTodo }>Add Todo</button>
        </div>
        <div className="todoList">
          <ul>{ list }</ul>
        </div>
        <div className="statusList">
          <span>show filter: </span>
          <button onClick={() => this.changeStatus('all')}>all</button>
          <button onClick={() => this.changeStatus('active')}>active</button>
          <button onClick={() => this.changeStatus('completed')}>completed</button>
        </div>
      </div>
    );
  }
}

export default App;
