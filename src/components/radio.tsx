import {type UseFormRegister, type FieldValues } from "react-hook-form"


type OptionProps = {
    valor: string,
    name: string,
    register: UseFormRegister<FieldValues>
}


const InputRadio = ({valor, name, register}:OptionProps) => {
    return (
      <div>
          <label>
            {valor}
           <input type='radio' value={valor}
            {...(register ? register(name) : {})}
             />
          </label>
      </div>
    )
}

export default InputRadio