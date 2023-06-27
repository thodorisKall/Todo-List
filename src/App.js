import "./App.css"
import React, { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [enable, setEnable] = useState(false)
  const [task, setTask] = useState([])

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  const handleAddBtn = (event) => {
    setTask([...task, inputValue])
    setInputValue("")
  }
  return (
    <>
      <h1>Todo List</h1>
      <div className='input__container'>
        <input
          className={enable ? "input__enable" : "input__disable"}
          type='text'
          value={inputValue}
          onChange={handleInput}
          placeholder='Enter your task'
          onClick={() => setEnable(true)}
        />
        <button
          onClick={() => {
            handleAddBtn(inputValue)
          }}
        >
          Add
        </button>
      </div>

      <h3>{task}</h3>
    </>
  )
}

export default App
