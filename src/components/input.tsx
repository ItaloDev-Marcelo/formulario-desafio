
import {type UseFormRegister } from "react-hook-form"
import {type FormData } from "../lib/yupSchema"
import ErrorText from "./errorText"
import {type  FieldErrors } from "react-hook-form"


interface InputProps {
    tipo: string,
    name: keyof FormData,
    label: string,
    placeholder: string,
    id:string,
    register: UseFormRegister<FormData>,
    errors: FieldErrors<FormData>
}

const Input = ({tipo, name, label, placeholder, id, register, errors}: InputProps) => {
    return (
       <>
        <label htmlFor={id}>
        {label}
        <input type={tipo} id={id} placeholder={placeholder}
         {...register(name)} />
       </label>
       <ErrorText errors={errors} name={name} />
       </>
    )
}

export default Input