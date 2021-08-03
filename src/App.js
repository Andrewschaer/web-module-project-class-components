import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
import './components/Todo.css'


const toDoData = [
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
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoData: toDoData
    }
  }

  handleCrossOut = (id)=> {
    this.setState({
      toDoData: this.state.toDoData.map(toDoItem => {
        if (toDoItem.id ===id) {
          return({
            ...toDoItem,
            completed: !toDoItem.completed
          });
        }
        return toDoItem;
      })
    });
  }

  handleAddToDoItem = (e) => {
    console.log(e)
  }

  handleClear = () => {
    console.log('Pending Code for Clearing Items')
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList toDoData={this.state.toDoData} handleCrossOut={this.handleCrossOut}/>
        <TodoForm handleAddToDoItem={this.handleAddToDoItem} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
