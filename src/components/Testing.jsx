import {React,createContext,useState} from 'react'
import Test2 from './Test2'


export const context= createContext();

const Test1 = () => {
  const[name,setname]= useState("vicky")

  return (
    <context.Provider value={name}>

    
        <p>this is from test 1</p>
        <Test2/>
    
    </context.Provider>

  )
}

export default Test1