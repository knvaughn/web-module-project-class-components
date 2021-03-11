import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        value={this.props.toDoItem}
                        onChange={this.props.handleChange}
                    />
                    <button>Add ToDo</button>
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;