import React, {Component} from 'react';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <input
                    size="45"
                    ref={ this.props.input }>
                </input>
                <button onClick={ this.props.onClick }>Add Todo</button>
             </div>
        );
    }
}

export default AddTodo;