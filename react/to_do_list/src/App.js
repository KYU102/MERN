import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Form from './Components/Form';
import Display from './Components/Display';


function App() {
  const [tasks, setTasks] = useState([])
  
  
  const addTask = (taskObj) => {
    setTasks([...tasks, taskObj])
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((task, i) =>  index !== i)
    setTasks(newTasks)
  }

  const completeTask = (searchIndex, completeBool) => {
    const newTasks = tasks.map((task, index) => {
      if(searchIndex === index){
        task.completed = completeBool
      }
      return task

    })
    setTasks(newTasks)
  }

  return (
    <div>
      <fieldset>
        <legend>App.js</legend>
          <Form addTask={addTask}/>
          <Display completeTask={completeTask} removeTask={removeTask} tasks={tasks} />
      </fieldset>
    </div>
  );
}

export default App;
