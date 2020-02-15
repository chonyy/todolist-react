import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todonameref = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggletodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleaddtodo(e) {
        const name = todonameref.current.value
        if (name === '') return
        setTodos(prevtodos => {
            return [...prevtodos, { id: uuidv4(), name: name, complete: false }]
        })
        todonameref.current.value = null
    }

    function handlecomplete() {
        const newtodos = todos.filter(todo => !todo.complete)
        setTodos(newtodos)
    }

    return (
        <>
            <Todolist todos={todos} toggletodo={toggletodo} />
            <div class="left">{todos.filter(todo => !todo.complete).length} tasks left to do</div>
            <div class="addtask">
                <div class="form__group">
                    <input ref={todonameref} type="input" class="form__field" placeholder=" Enter tasks..." name="Task" id='name' required />
                    <label for="name" class="form__label">Enter Task...</label>
                </div>
                <button onClick={handleaddtodo}>ADD TODO</button>

            </div>
            <button onClick={handlecomplete}>CLEAR COMPLETED</button>
        </>

    )
}

export default App;
