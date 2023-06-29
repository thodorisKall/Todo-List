import React from "react"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"

function Task({ name, task_id }) {
  return (
    <div className='single__task' key={task_id}>
      <h2>{name}</h2>
      <div className='task__icons'>
        <button id='btn-delete'>
          <BsFillTrashFill />
        </button>
        <button id='btn-note'>
          <BsPencil />
        </button>
      </div>
    </div>
  )
}

export default Task
