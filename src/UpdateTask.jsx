import React from "react"
import "./UpdateTask.css"

function UpdateTask({ handleCancelBtn, handleInput, name }) {
  return (
    <div className='updateTask__container'>
      <h2>Update your Task</h2>
      <input
        className='updateTask'
        type='text'
        value={name}
        onChange={handleInput}
      />
      <div className='updateTask__buttons'>
        <button onClick={() => handleCancelBtn()}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  )
}

export default UpdateTask
