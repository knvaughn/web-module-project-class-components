import React from 'react';
import ToDo from './Todo';

class ToDoList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ul>
                {
                    this.props.toDoList.map((toDo, index) => {
                        return (
                            <ToDo toDo={toDo} key={index} />
                        )
                    })
                }
            </ul>
        )
    }
}

export default ToDoList;