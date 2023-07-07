import React from "react"
import { CgDanger, CgClose } from "react-icons/cg"

function EnterTaskMessage() {
  return (
    <div className='enterTask__container'>
      <CgDanger />
      <h3>Enter your Task</h3>
      <CgClose />
    </div>
  )
}

export default EnterTaskMessage
