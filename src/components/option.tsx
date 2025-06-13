type OptionProps = {
    valor: string,
    name: string
}


const InputRadio = ({valor, name}:OptionProps) => {
    return (
      <div>
          <label>
            {valor}
           <input type='radio' name={name} value={valor} />
          </label>
      </div>
    )
}

export default InputRadio