import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const toDoListData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: toDoListData,
      toDoItem: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      toDoItem: event.target.value
    })
  }

  handleSubmit = (item) => {
    this.setState({
      toDoList: [
        ...this.state.toDoList,
        {
          task: item,
          id: Date.now(),
          completed: false
        }
      ],
      toDoItem: ''
    })
  }

  toggleCompleted = (itemId) => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  handleClear = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <ToDoList 
          toDoList={this.state.toDoList} 
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm 
          toDoItem={this.state.toDoItem} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
