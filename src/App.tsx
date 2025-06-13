import { useForm } from 'react-hook-form'
import './App.css'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './components/input'
import InputRadio from './components/radio'

import Data from './data/inputData'
function App() {

    const formsSchema = yup.object({
     nome: yup.string().required('Informe seu nome completo'),
     email: yup.string().required('Informe seu Email'),
     telefone: yup.number().required('Informe um numero valido'),
     linkedin: yup.string().required('Informe seu linkedin'),
     radioType: yup.string().required()
  })


  const {handleSubmit, register, formState: {errors}, reset} = useForm ({
    resolver: yupResolver(formsSchema)
  })


  const submit = (data:object) => {
     console.log(data)
     console.log(errors.name?.message)
     reset()
  }

  return (
      <form onSubmit={handleSubmit(submit)}>
      <Input tipo={Data[0].type} name={Data[0].name} register={register} label={Data[0].label} placeholder={Data[0].placeholder}  id={Data[0].id} />
      <Input tipo={Data[1].type} name={Data[1].name} register={register}  label={Data[1].label} placeholder={Data[1].placeholder} id={Data[1].id} />
      <Input tipo={Data[2].type} name={Data[2].name} register={register} label={Data[2].label} placeholder={Data[2].placeholder} id={Data[2].id} />
      <Input tipo={Data[3].type} name={Data[3].name} register={register} label={Data[3].label} placeholder={Data[3].placeholder} id={Data[3].id} />
      <div>
        <label>Stack de desenvolvimento</label>
           <InputRadio valor='frontend' name='radioType' register={register} />
           <InputRadio valor='mobile' name='radioType' register={register} />
           <InputRadio valor='backend' name='radioType' register={register} />
           <InputRadio valor='fullstack' name='radioType' register={register} />
           <InputRadio valor='devops' name='radioType' register={register} />
      </div>
      <button>Enviar</button>
      </form>
  )
}

export default App
