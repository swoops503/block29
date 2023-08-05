import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PlayerList } from './components/PlayerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PlayerList />
    </>
  )
}

export default App
