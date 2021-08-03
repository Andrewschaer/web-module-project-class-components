import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue:''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            inputValue:e.target.value
        })
    };

    handleClickAdd = (e)=> {
        e.preventDefault();
        this.props.handleAddToDoItem(this.state.inputValue);
    }

    handleClickClear = (e)=> {
        e.preventDefault();
        this.props.handleClear();
    }

    render() {
        return (
            <div className='todo-form'>
                <form>
                    <input onChange={this.handleChanges} type='text' name='toDoItem'/>
                    <button onClick={this.handleClickAdd}>Add Todo</button>
                    <button onClick={this.handleClickClear}>Clear Completed</button>   
                </form>
            </div>
        );
    };
}

export default TodoForm;

