
import { type FieldValues } from "react-hook-form"
import {type UseFormRegister } from "react-hook-form"

type InputProps  = {
    tipo: string,
    name: string,
    label: string,
    placeholder: string,
    id:string,
    register: UseFormRegister<FieldValues>
}



const Input = ({tipo, name, label, placeholder, id, register}: InputProps) => {
    return (
        <label htmlFor={id}>
        {label}
        <input type={tipo} id={id} placeholder={placeholder}
         {...(register ? register(name) : {})} />
       </label>
    )
}

export default Input