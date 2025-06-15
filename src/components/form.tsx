import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {formsSchema, type FormData} from '../lib/yupSchema'
import Input from './input'
import InputRadio from './radio'
import {arrData, arrData2} from '../data/inputsData'
import RadioData from '../data/radiosData'
import ErrorText from '../components/errorText';



export default  function RegistrationForm() {


  const {handleSubmit, register, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(formsSchema)
  })


  const submit = (data:object) => {
     console.log(data)
    //  reset()
  }


  return (
      <form onSubmit={handleSubmit(submit)} className='bg-medium-gray mt-2 p-4
       w-[325px] md:mt-3 md:w-[448px] rounded-[12px] border-1 ' >
      <legend className='text-center my-4'>Cadastro de Desenvolvedor</legend>
      <div>
      <div>
         {
        arrData.map(({type,name,label,placeholder,id}) => {
           return  <Input tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <div >
      <label>Stack de desenvolvimento</label>
      <div className='grid gap-2 grid-cols-2 my-2' >
            {
            RadioData.map(({value}) => {
               return <InputRadio valor={value} name='radioType' register={register}/>
            })
           }
      </div>
      <ErrorText errors={errors} name='radioType' />
      </div>
      <div >
         {
        arrData2.map(({type,name,label,placeholder,id}) => {
           return  <Input tipo={type} name={name} register={register} label={label}
            placeholder={placeholder} id={id} errors={errors} />
        })
        }
      </div>
      <button className='text-center bg-blue font-bold w-[100%] h-[42px] mt-2 rounded-[6px]  '>Enviar</button>
      </div>
      </form>
  )
}


