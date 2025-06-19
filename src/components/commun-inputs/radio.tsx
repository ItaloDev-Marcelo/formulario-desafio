import type { RadioProps} from "../../global-interface"


const InputRadio = ({valor, name, register,classes,inputclass,type}:RadioProps) => {
    return (
          <div>
            <label className={classes}
           id={valor} >
            <span className='px-2 py-1'>{valor}</span>
            <input type={type} value={valor}
             {...register(name)} className={inputclass}   />
          </label>
          </div>
    )
}

export default InputRadio