import React from "react"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"

function Task({ name, task_id }) {
  return (
    <div className='single__task'>
      <h2>{name}</h2>
      <div className='task__icons'>
        <BsFillTrashFill />
        <BsPencil />
      </div>
    </div>
  )
}

export default Task
