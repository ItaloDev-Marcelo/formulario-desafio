import {type UseFormRegister} from "react-hook-form"
import { type FormData } from "../lib/yupSchema"

interface OptionProps  {
    valor: string,
    name: keyof FormData,
    register: UseFormRegister<FormData>
}


const InputRadio = ({valor, name, register}:OptionProps) => {
    return (
          <div>
            <label className="flex cursor-pointer py flex-row border-2 items-start 
            w-[100%]
            h-[40px] md:w-[180] rounded-[6px] "
           id={valor} >
            <span className='px-2 py-1'>{valor}</span>
            <input type='radio' value={valor} {...register(name)} className='hidden'   />
          </label>
          </div>
    )
}

export default InputRadio