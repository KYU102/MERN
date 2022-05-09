import React from 'react'

const Display = (props) => {

    const {tasks, removeTask, completeTask} = props

    const deleteBut = (e, index) => {
        removeTask(index)
    }

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <ul>
            {
                tasks.map((task, index) => {
                    return (
                        <li>
                            {(task.completed) ?  <p style={{ textDecorationLine: 'line-through' }}>{task.oneTask}  </p> : <p>{task.oneTask}</p>}
                            <input 
                                onChange={(e) => {completeTask(index, e.target.checked)}} 
                                checked={task.completed} 
                                type="checkbox" 
                                name="completed" >
                            </input>
                            <button onClick={(e) => deleteBut(e, index)}>Delete</button>
                        </li>
                    )
                })
            }
            </ul>
        </fieldset>
    )
} 

export default Display