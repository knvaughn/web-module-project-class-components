import React from 'react';

class ToDo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li>
                {this.props.toDo.task}
            </li>
        )
    }
}

export default ToDo;