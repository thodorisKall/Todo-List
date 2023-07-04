import React from "react"

function DeleteAll({ noBtn, yesBtn }) {
  const handleYes = () => {
    yesBtn()
  }

  const handleNo = () => {
    noBtn()
  }
  return (
    <div className='deleteAll__container'>
      <h2>Do you really want to delete all tasks</h2>
      <div className='deleteAll__buttons'>
        <button onClick={() => handleNo()}>No</button>
        <button onClick={() => handleYes()}>Yes</button>
      </div>
    </div>
  )
}

export default DeleteAll
