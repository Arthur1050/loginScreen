import { useState } from "react";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function FormRegister({handler} : {handler: () => void}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <>
        <div className='flex flex-col w-1/2 p-4'>
            <div>
                <h1 className='text-2xl font-semibold mb-2 text-zinc-800'>Seja bem vindo(a)!</h1>
                <h2 className='text-sm'>Registra-se para continuar.</h2>
            </div>
            <div className='flex flex-col gap-3 flex-auto justify-center'>
                <div className="flex gap-6">
                    <InputText label='Nome' value={nome} onChange={event => setNome(event.target.value)} name='name'/>
                    <InputText label='Sobrenome' value={sobrenome} onChange={event => setSobrenome(event.target.value)} name='sobrenome'/>
                </div>
                <InputText label='E-mail' name='sobrenome'/>
                <InputPassword label='Senha' value={senha} onChange={event => setSenha(event.target.value)} name='senhaRegister'/>
            </div>
            <div className='flex flex-col gap-2'>
                <PrimaryButton text='Regsitrar' />
                <SecondaryButton onclick={handler} text='Voltar'/>
            </div>
        </div>
        </>
    )
}