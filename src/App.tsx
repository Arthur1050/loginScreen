import FormLogin from './components/FormLogin'
import InfoLogin from './components/InfoLogin'

import './App.css'
import FormRegister from './components/FormRegister'
import { useState } from 'react'

function App() {
  const [moveLeft, setMoveLeft] = useState(false);

  const moveInfoLogin = () => {
    setMoveLeft(!moveLeft)
    console.log(moveLeft)
  }

  return (
    <>
    <img id='backgroundLogin' src="/src/assets/background-image.jpg" alt="" />
    <main>
      <div className='flex bg-white p-1 rounded-lg w-2/3 h-5/6 relative gap-1'>
        <FormLogin handler={moveInfoLogin}/>
        <FormRegister handler={moveInfoLogin}/>
        <InfoLogin move={moveLeft}/>
      </div>
    </main>
    </>
  )
}

export default App