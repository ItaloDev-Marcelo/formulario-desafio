import './App.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {formsSchema, type FormData} from './lib/yupSchema'
import Input from './components/input'
import InputRadio from './components/radio'
import InputData from './data/inputsData'
import RadioData from './data/radiosData'
import ErrorText from './components/errorText';



function App() {


  const {handleSubmit, register, formState: {errors}, reset} = useForm<FormData>({
    resolver: yupResolver(formsSchema)
  })


  const submit = (data:object) => {
     console.log(data)
     reset()
  }


  return (
      <form onSubmit={handleSubmit(submit)}>
      <div>
         {
        InputData.map(({type,name,label,placeholder,id}) => {
           return  <Input tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <div>
      <label>Stack de desenvolvimento</label>
      <div>
            {
            RadioData.map(({value}) => {
               return <InputRadio valor={value} name='radioType' register={register}/>
            })
           }
      </div>
      <ErrorText errors={errors} name='radioType' />
      </div>
      <button>Enviar</button>
      </form>
  )
}

export default App
