import { z } from "zod";
 

 export const schema = z.object({
     nome: z.string().nonempty('Informe seu nome completo'),
     email: z.string().email('Informe seu Email'),
     telefone: z.string().nonempty('Informe um numero valido') ,
     linkedin: z.string().nonempty('Informe seu linkedin').url('URL Inválida'),
     radioType: z.string({required_error: "Selecione uma Stack", invalid_type_error: "Selecione uma Stack"}).nonempty('Informe seu um campo')
  })

  export type FormData  = z.infer<typeof schema>;