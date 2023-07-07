import "./App.css"
import Task from "./Task.js"
import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import IllustrationTodo from "./assets/illustrationTodo.png"
import DeleteAll from "./DeleteAll.js"
import EnterTaskMessage from "./EnterTaskMessage"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [enable, setEnable] = useState(false)
  const [task, setTask] = useState([])
  const [deleteAll, setDeleteAll] = useState(false)
  const [showEnterTask, setShowEnterTask] = useState(false) //show component

  const handleInput = (event) => {
    event.preventDefault()
    setInputValue(event.target.value)
  }

  const handleAddBtn = () => {
    if (inputValue.trim() !== "") {
      setTask((prevTasks) => [...prevTasks, { id: uuidv4(), name: inputValue }])
      setInputValue("")
    } else {
      setShowEnterTask(true)
    }
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

  const handleDeleteAll = () => {
    setDeleteAll(true)
  }

  const handleYesBtn = () => {
    deleteAllTasks()
    setDeleteAll(false)
  }

  const handleNoBtn = () => {
    setDeleteAll(false)
  }

  const closeBtnEnterYourTask = () => {
    setShowEnterTask(false)
  }

  return (
    <>
      {showEnterTask && (
        <EnterTaskMessage closeEnterTask={closeBtnEnterYourTask} />
      )}
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
      <div
        className={
          task.length === 0 ? "bg__image" : "tasks__container-disabled"
        }
      >
        <img src={IllustrationTodo} alt={IllustrationTodo} />
      </div>

      <div
        className={
          task.length === 0 ? "tasks__container-disabled" : "tasks__container"
        }
      >
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
      {deleteAll && <DeleteAll noBtn={handleNoBtn} yesBtn={handleYesBtn} />}
      <button
        id={task.length === 0 ? "btn-close-disabled" : "btn-close"}
        onClick={(() => deleteAllTasks(), () => handleDeleteAll())}
      >
        Delete all
      </button>
    </>
  )
}

export default App
