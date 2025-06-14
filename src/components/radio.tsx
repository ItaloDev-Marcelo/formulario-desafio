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
          <label>
            {valor}
            <input type='radio' value={valor} {...register(name)} />
          </label>
      </div>
    )
}

export default InputRadio