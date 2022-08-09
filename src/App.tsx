import { useState } from 'react'
import './App.css'
import { TwitterLeftMenu } from './TwiterSection/TwiterLeftMenu'
import { TwiterMainPage } from './TwiterSection/TwiterMainPage'
import { TwiterRightMenu } from './TwiterSection/TwiterRightMenu'

function App() {

  return (
    <div className="App">
     <TwitterLeftMenu />
     <TwiterMainPage />
     <TwiterRightMenu />
    </div>
  )
}

export default App
