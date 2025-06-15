
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
       <div className="flex flex-col ">
        <label htmlFor={id} className='py' >
        {label}
        <input type={tipo} id={id} placeholder={placeholder}
         {...register(name)} className='border-1 w-[100%] h-[45px] ' />
       </label>
       <ErrorText errors={errors} name={name} />
       </div>
    )
}

export default Input