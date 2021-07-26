import React, { useState } from 'react'
import Todo from './Todo'

export default function Todos() {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState<string[]>([])
    console.log("Todo Info", todo);
    
    const addTodo =()=>{
        setTodoList ([ ... todoList, todo])
        setTodo("")
    }
    console.log("Todo List Info", todoList);
    
    return (
        <div className="ContainerBox">
            <div className="boxContent">
            <div className="todoTitle">
                <h1>📝 To-DO List</h1>
            </div>
            <div className="form">
                <input 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="text"
                    placeholder="Add a list"
                    name="name"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            {
                todoList.map((todoName) => <Todo key={todoName} name={todoName} />)
            }
            </div> 
        </div>
    )
}
