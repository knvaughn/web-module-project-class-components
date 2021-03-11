import React from 'react';
import './Todo.css';

class ToDo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li onClick={()=>this.props.toggleCompleted(this.props.toDo.id)} className={this.props.toDo.completed ? "completed" : ""}>
                {this.props.toDo.task}
            </li>
        )
    }
}

export default ToDo;