import React, {Component} from 'react';
import './TodoList.css';

class TodoList extends Component {
    render() {
        const list = this.props.list.map((item, index) => {
            return (
                <li key={index} onClick={() => this.props.onClick(item.id)} className = {item.completed ? 'lineThrough' : ''}>{item.value}</li>
            );
        });
      return (
          <div className="todoList">
              <ul>{list}</ul>
          </div>
      );
    };
}

export default TodoList;