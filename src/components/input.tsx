
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
       <div className="flex flex-col my-2 ">
        <label htmlFor={id} className='py-2' >
        {label}
        <input type={tipo} id={id} placeholder={placeholder}
         {...register(name)} className='w-[100%] h-[45px] rounded-[6px]
           bg-light-gray mt-1 px-[0.4em] ' />
       </label>
       <ErrorText errors={errors} name={name} />
       </div>
    )
}

export default Input