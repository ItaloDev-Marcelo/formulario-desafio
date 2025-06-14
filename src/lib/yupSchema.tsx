 
import * as yup from 'yup';
import type { InferType } from 'yup';
 

 export const formsSchema = yup.object({
     nome: yup.string().required('Informe seu nome completo'),
     email: yup.string().required('Informe seu Email'),
     telefone: yup.string().required('Informe um numero valido'),
     linkedin: yup.string().required('Informe seu linkedin'),
     radioType: yup.string().required('Informe seu um campo')
  })

  export type FormData  = InferType<typeof formsSchema>