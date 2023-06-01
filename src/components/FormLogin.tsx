import { useState } from 'react'
import InputText from "./InputText";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import InputPassword from './InputPassword';

export default function FormLogin () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
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
        </>
    )
}