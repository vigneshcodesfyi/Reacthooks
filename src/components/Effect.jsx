import React, { useEffect,useState } from 'react'

const Effect = () => {
const [num,setnum]=useState(0)

function add() {
    setnum((prev)=>prev+1)
  }

  function sub() {
    setnum((prev)=>prev-1)

  }

useEffect(()=>{
 
console.log("useefect has been used")

return()=>{

console.log("cleaneed up the memory")}

},[num])


  return (
    <>
    <div>Effect</div>
    <p>{num}</p>
    <button onClick={add} >add</button>
    <button onClick={sub} >sub</button>
    </>
  )
}

export default Effect