import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"

interface InputTextProps {
    name: string,
    value?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    label: string
}

export default function InputText({name, value, onChange, label} : InputTextProps) {
    return (
        <div className="flex flex-col items-start">
            <label className="-mb-1 text-xs font-semibold text-zinc-700" htmlFor={name}>{label}</label>
            <Input focusBorderColor="purple.500" colorScheme='purple' variant='flushed' id={name} name={name} value={value} onChange={onChange}/>
        </div>
    )
}