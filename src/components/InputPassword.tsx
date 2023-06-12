import { Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { Eye, EyeOff } from "lucide-react";
import { ChangeEventHandler, useState } from "react"

interface InputPasswordProps {
    name: string,
    value: string,
    onChange : ChangeEventHandler<HTMLInputElement>,
    label: string
}

export default function InputPassword({name, value, onChange, label} : InputPasswordProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col items-start">
            <label className="-mb-1 text-sm font-semibold text-zinc-700" htmlFor={name}>{label}</label>
            <InputGroup>
                <Input focusBorderColor="purple.500" type={show ? 'text' : 'password'} variant='flushed' id={name} name={name} value={value} onChange={onChange}/>
                <InputRightElement width='4.5rem'>
                    <div className="text-gray-600 cursor-pointer hover:text-gray-500 transition-colors" onClick={() => setShow(!show)}>
                        {show ? <Eye size={20}/> : <EyeOff size={20}/>}
                    </div>
                </InputRightElement>
            </InputGroup>
            <span className="hover:text-purple-800 hidden transition-colors self-end cursor-pointer text-xs font-semibold text-gray-500 mt-2">Esqueci minha senha...</span>
        </div>
    )
}