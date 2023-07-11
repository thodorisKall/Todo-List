import React, { useState } from "react"
import "./Task.css"
import { BsFillTrashFill, BsSquare, BsCheckSquare } from "react-icons/bs"

function Task({ name, task_id, deleteSingleTask }) {
  const [showID, setShowID] = useState(false)
  const [check, setCheck] = useState(false)

  const handleDelBtn = (id) => {
    deleteSingleTask(id)
  }
  return (
    <div className='single__task' key={task_id}>
      <h2 className={check ? "overwrite-effect" : "single__task-title"}>
        {name}
      </h2>
      <h3 className={showID ? "task-id" : "task-id-disable"}>{task_id}</h3>
      <div className='task__icons'>
        <button id='btn-check' onClick={() => setCheck(!check)}>
          {check ? <BsCheckSquare /> : <BsSquare />}
        </button>
        <button id='btn-delete' onClick={() => handleDelBtn(task_id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default Task
