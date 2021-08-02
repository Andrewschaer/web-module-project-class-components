import React, { useState } from 'react'

const Todo = props => {
    
    const handleClick = ()=> {
        props.handleCrossOut(props.toDoItem.id);
    }
    return (
        <div onClick={handleClick}>
            <p>{props.toDoItem.task}</p>
        </div>
    );
}

export default Todo