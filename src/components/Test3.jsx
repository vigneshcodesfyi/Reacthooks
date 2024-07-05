import React, { useContext } from 'react'
import { context } from './Testing'

const Test3 = () => {
    const value = useContext(context)
  return (
    
    <div>Hi this prop is coming from test which is {value}</div>
  )
}

export default Test3