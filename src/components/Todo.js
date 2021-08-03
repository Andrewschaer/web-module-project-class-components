import React from 'react'

const Todo = props => {
    
    const handleClick = ()=> {
        props.handleCrossOut(props.toDoItem.id);
    }
    return (
        <div onClick={handleClick} className={`toDoItem${props.toDoItem.completed ? ' completed' : ''}`}>
            <p>{props.toDoItem.task}</p>
        </div>
    );
}

export default Todo