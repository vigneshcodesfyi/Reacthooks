import React, { useState } from 'react'

const State = () => {

    const [num,setnum]=useState(0)




    function add() {
      setnum((prev)=>prev+1)
    }

    function sub() {
      setnum((prev)=>prev-1)

    }
  return (
    <>
    <div>State</div>

   <p>{num}</p>
    <button onClick={add} >add</button>
    <button onClick={sub} >sub</button>

    </>
  )
}

export default State