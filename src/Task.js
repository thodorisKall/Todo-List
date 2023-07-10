import React, { useState } from "react"
import {
  BsFillTrashFill,
  BsPencil,
  BsSquare,
  BsCheckSquare,
} from "react-icons/bs"

function Task({ name, task_id, deleteSingleTask }) {
  const [showID, setShowID] = useState(false)

  const handleDelBtn = (id) => {
    deleteSingleTask(id)
  }
  return (
    <div className='single__task' key={task_id}>
      <h2>{name}</h2>
      <h3 className={showID ? "task-id" : "task-id-disable"}>{task_id}</h3>
      <div className='task__icons'>
        <button id='btn-check'>
          <BsSquare />
        </button>
        <button id='btn-delete' onClick={() => handleDelBtn(task_id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default Task
