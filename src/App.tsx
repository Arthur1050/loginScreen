import FormLogin from './components/FormLogin'
import InfoLogin from './components/InfoLogin'

import './App.css'

function App() {
  return (
    <>
    <img id='backgroundLogin' src="/src/assets/background-image.jpg" alt="" />
    <main>
      <div className='flex bg-white p-1 rounded-lg w-2/3 h-5/6 relative gap-1'>
        <FormLogin />
          <InfoLogin />
      </div>
    </main>
    </>
  )
}

export default App