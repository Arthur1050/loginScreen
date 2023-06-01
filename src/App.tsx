import { useState } from 'react'
import InputText from './components/InputText'
import InputPassword from './components/inputPassword';
import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';

import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <img id='backgroundLogin' src="/src/assets/background-image.jpg" alt="" />
      <div className='flex bg-white p-1 rounded-lg w-2/3 h-5/6 relative gap-1'>
        <div className='flex flex-col w-1/2 p-4'>
          <div>
            <h1 className='text-2xl mb-2'>Seja bem vindo(a)!</h1>
            <h2 className='text-sm'>Faça login para prosseguir.</h2>
          </div>
          <div className='flex flex-col gap-2 flex-auto justify-center'>
            <InputText label='Usuario' value={email} onChange={event => setEmail(event.target.value)} name='email'/>
            <InputPassword label='Senha' value={senha} onChange={event => setSenha(event.target.value)} name='senha'/>
          </div>
          <div className='flex flex-col gap-2'>
            <PrimaryButton text='Login' />
            <SecondaryButton text='Registrar-se'/>
          </div>
        </div>
        <div className='w-1/2 bg-violet-400 rounded-lg'>

        </div>
      </div>
    </>
  )
}

export default App