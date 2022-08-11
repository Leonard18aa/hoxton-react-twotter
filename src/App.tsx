import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { Fahouse } from "react-icons/fa"
import { TwitterLeftMenu } from './TwiterComponentSection/TwiterLeftMenu'
import { TwiterMainPage } from './TwiterComponentSection/TwiterMainPage'
import { TwiterRightMenu } from './TwiterComponentSection/TwiterRightMenu'


function App() {

  return (
    <div className="App">
     <TwitterLeftMenu />

    <Routes>
      <Route path='/homePage' element={ <h1>Home Page</h1> } />
      <Route />
      <Route />
    </Routes>

     <TwiterMainPage />
     <TwiterRightMenu />
    </div>
  )
}

export default App
