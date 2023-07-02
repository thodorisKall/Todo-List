import React from "react"

function DeleteAll() {
  return (
    <div className='deleteAll__container'>
      <h2>Do you really want to delete all tasks</h2>
      <div className='deleteAll__buttons'>
        <button>No</button>
        <button>Yes</button>
      </div>
    </div>
  )
}

export default DeleteAll
