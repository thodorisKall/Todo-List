import React from "react"
import "./DeleteAll.css"

function DeleteAll({ noBtn, yesBtn }) {
  return (
    <div className='deleteAll__container'>
      <h2>Do you really want to delete all tasks</h2>
      <div className='deleteAll__buttons'>
        <button onClick={() => noBtn()}>No</button>
        <button onClick={() => yesBtn()}>Yes</button>
      </div>
    </div>
  )
}

export default DeleteAll
