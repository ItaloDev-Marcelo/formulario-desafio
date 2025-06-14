import { useForm } from 'react-hook-form'
import './App.css'
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './components/input'
import InputRadio from './components/radio'
import {formsSchema,type FormData} from './lib/yupSchema'

import Data from './data/inputData'
import ErrorText from './components/errorText';



function App() {


  const {handleSubmit, register, formState: {errors}, reset} = useForm<FormData>({
    resolver: yupResolver(formsSchema)
  })


  const submit = (data:object) => {
     console.log(data)
     reset()
  }

  type RadioFormate = {
    value: string
 }


 const radioData:RadioFormate[] =  [
  {
    value: 'frontend'
  },
  {
    value: 'mobile'
  },
  {
    value: 'backend'
  },
  {
    value: 'fullstack'
  },
  {
    value: 'devops'
  }
 ]




  return (
      <form onSubmit={handleSubmit(submit)}>
      <div>
         {
        Data.map(({type,name,label,placeholder,id}) => {
           return  <Input tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <div>
      <label>Stack de desenvolvimento</label>
      <div>
            {
            radioData.map(({value}) => {
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
