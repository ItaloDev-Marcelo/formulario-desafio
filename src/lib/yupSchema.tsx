 
import * as yup from 'yup';
import type { InferType } from 'yup';
 

 export const formsSchema = yup.object({
     nome: yup.string().required('Informe seu nome completo'),
     email: yup.string().required('Informe seu Email').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Informe um email valido"),
     telefone: yup.string().required('Informe um numero valido').matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Informe um telefone valido"),
     linkedin: yup.string().required('Informe seu linkedin'),
     radioType: yup.string().required('Informe seu um campo')
  })

  export type FormData  = InferType<typeof formsSchema>