
import React, { useState } from 'react'

const Form = (props) => {

    const {addTask} = props

    const [oneTask, setOneTask] = useState("")
    const [completed, setCompleted] = useState(false)
    

    const submitHandler = (e) => {
        e.preventDefault()
        let obj = {
            oneTask,
            completed
        }
        addTask(obj)
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Task:
                    <input onChange={(e) => setOneTask(e.target.value)} type="text" name="task" />
                </p>
                <button>Add</button>
            </form>
        </fieldset>
    )
}

export default Form