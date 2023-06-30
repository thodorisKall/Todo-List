import "./App.css"
import Task from "./Task.js"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [enable, setEnable] = useState(false)
  const [task, setTask] = useState([])

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddBtn = () => {
    setTask((prevTasks) => [...prevTasks, { id: uuidv4(), name: inputValue }])
    setInputValue("")
  }

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleAddBtn()
    }
  }

  const deleteSingleTask = (taskId) => {
    setTask(task.filter((task) => task.id !== taskId))
  }

  const deleteAllTasks = () => {
    setTask([])
  }
  return (
    <>
      <h1>Todo List</h1>
      <div className='input__container'>
        <input
          className={enable ? "input__enable" : "input__disable"}
          placeholder='Enter your task'
          type='text'
          value={inputValue}
          onChange={handleInput}
          onClick={() => setEnable(true)}
          onKeyPress={handlePressEnter}
        />
        <button
          onClick={() => {
            handleAddBtn(inputValue)
          }}
        >
          Add
        </button>
      </div>

      <div className='tasks__container'>
        {task.map((item, index) => {
          return (
            <Task
              key={item.id}
              name={item.name}
              task_id={item.id}
              deleteSingleTask={deleteSingleTask}
            />
          )
        })}
      </div>
      <button id='btn-close' onClick={() => deleteAllTasks()}>
        Delete all
      </button>
    </>
  )
}

export default App
