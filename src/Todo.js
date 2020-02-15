import React from 'react'

export default function Todo({ todo, toggletodo }) {

    function handletodoclick() {
        toggletodo(todo.id)
    }

    return (
        <div class="task">
            <label class="checkcontain">{todo.name}
                <input type="checkbox" checked={todo.complete} onChange={handletodoclick}></input>
                <span class="checkmark"></span>
            </label>
        </div>
    )
}
