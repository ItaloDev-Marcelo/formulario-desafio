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
            <label className="flex py flex-row border-1 items-start h-[38px] w-[180] bg-blue p-2"
           id={valor} >
            {valor}
            <input type='radio' value={valor} {...register(name)} className='hidden'   />
          </label>
          </div>
    )
}

export default InputRadio