import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormData } from '../lib/zodSchema';
import Input from './input'
import InputRadio from './radio'
import {arrData, arrData2} from '../data/inputsData'
import RadioData from '../data/radiosData'
import ErrorText from '../components/errorText';
import {useState } from 'react';



export default  function RegistrationForm() {


  const [popUp, setPopUp] = useState(false)

  const {handleSubmit, register, formState: {errors}, reset} =useForm<FormData>({
    resolver: zodResolver(schema),
  })

  interface objetoFormate {
    nome: string
    email: string
    telefone: string | number
    radioType:string
    linkedin:string
  }



  const submit = (data:objetoFormate) => {
    const {nome, email, telefone, radioType, linkedin} = data
     if(nome && email && telefone && radioType && linkedin) {
          setPopUp(!popUp)
     }
    reset()
  }

   setTimeout(() => {
        setPopUp(false)
      }, 4000)


  return (
     <>
        <form onSubmit={handleSubmit(submit)} className='bg-medium-gray mt-2 p-4
       w-[325px] md:mt-3 md:w-[448px] rounded-[12px] border-2 ' >
      <legend className='text-center my-4'>Cadastro de Desenvolvedor</legend>
      <div>
      <div>
         {
        arrData.map(({type,name,label,placeholder,id}) => {
           return  <Input key={id} tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <div >
      <label>Stack de desenvolvimento</label>
      <div className='grid gap-2 grid-cols-2 my-2' >
            {
            RadioData.map(({value}) => {
               return <InputRadio key={value} valor={value} name='radioType' register={register}/>
            })
           }
      </div>
      <ErrorText errors={errors} name='radioType' />
      </div>
      <div >
         {
        arrData2.map(({type,name,label,placeholder,id}) => {
           return  <Input key={id} tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <button className='text-center bg-blue hover:bg-blue-500 font-bold w-[100%] h-[42px] mt-2 rounded-[6px] cursor-pointer  '>Enviar</button>
      </div>
       </form>

       {
        popUp && <article className='absolute top-2.5 md:top-7 text-center bg-green-400 p-4 rounded-[7px]'>
            <h1 className='font-bold'>Formulario enviado com Sucesso !</h1>
            <p className='font-semibold'> Seja bem vinda a nossa comunidade!.</p>
       </article>
       }
     </>


  )
}


