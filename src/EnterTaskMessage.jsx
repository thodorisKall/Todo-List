import React from "react"
import "./EnterTaskMessage.css"
import { CgDanger, CgClose } from "react-icons/cg"

function EnterTaskMessage({ closeEnterTask }) {
  return (
    <div className='enterTask__container'>
      <div className='enterTask-firstHalf'>
        <button>
          <CgDanger />
        </button>
        <h3>Enter your Task</h3>
      </div>
      <button>
        <CgClose onClick={() => closeEnterTask()} />
      </button>
    </div>
  )
}

export default EnterTaskMessage
