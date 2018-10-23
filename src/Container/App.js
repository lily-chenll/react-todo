import React, { Component } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: 0,
      todoList: [],
      showFilter: 'all',
    };
    this.input = React.createRef();
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
    return (
      <div className="App">
        <AddTodo input={ref => (this.input = ref)} onClick={this.addTodo} />
        <TodoList list={this.getStatusList()} onClick={(id) => this.handleClickTodo(id)}/>
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
