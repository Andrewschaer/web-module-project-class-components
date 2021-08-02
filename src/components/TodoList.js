// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js'

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.toDoData.map(toDoItem => (
                <Todo handleCrossOut={props.handleCrossOut} key={toDoItem.id} toDoItem={toDoItem}/>
            ))}
        </div>
    );
};

export default TodoList;

