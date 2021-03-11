import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.props.toDoItem)
    }

    clearCompleted = (event) => {
        event.preventDefault();
        this.props.handleClear();
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
                    <button onClick={this.submitForm}>Add ToDo</button>
                    <button onClick={this.clearCompleted}>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;