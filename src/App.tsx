import { useState } from 'react'
import viteLogo from '/vite.svg'
import { useImmer } from 'use-immer'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="basis-1/4 bg-yellow-400">01</div>
        <div className="basis-1/4 bg-blue-700">02</div>
        <div className="basis-1/2 bg-purple-500">03</div>
      </div>
      <img src={reactLogo} alt="" />
    </>
  )
}

export default App
