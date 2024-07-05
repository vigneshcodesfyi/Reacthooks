import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './components/State'
import Effect from './components/Effect'
import Ref from './components/Ref'
import Memo from './components/Memo'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './page/Home'
import Contact from './page/Contact'
import Navigation from './components/Navigation'
import User from './page/User'
import List from './components/List'
import Test from './components/Test'


function App() {


  return (
    <>
    <p>Hellothis si user</p>

    <List/> 

<BrowserRouter>
<Navigation/>
<Routes>
  <Route  path='/' element={<Home/>}></Route>

  

  <Route  path='/Contact' element={<Contact/>}>
  </Route>




  <Route  path='/Contact/:user' element={<User/>}>  </Route>


</Routes>
</BrowserRouter>




<Test/>

</>
   
  )
}

export default App;
