
import {type UseFormRegister } from "react-hook-form"
import {type FormData } from "../lib/yupSchema"


interface InputProps {
    tipo: string,
    name: keyof FormData,
    label: string,
    placeholder: string,
    id:string,
    register: UseFormRegister<FormData>
}

const Input = ({tipo, name, label, placeholder, id, register}: InputProps) => {
    return (
        <label htmlFor={id}>
        {label}
        <input type={tipo} id={id} placeholder={placeholder}
         {...register(name)} />
       </label>
    )
}

export default Input