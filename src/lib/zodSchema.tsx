import { z } from "zod";
 

 export const schema = z.object({
     nome: z.string().min(7).nonempty('Informe seu nome completo'),
     email: z.string().email('Informe seu Email'),
     telefone: z.string().nonempty('Informe um numero valido') ,
     linkedin: z.string().nonempty('Informe seu linkedin'),
     radioType: z.string().nonempty('Informe seu um campo')
  })

  export type FormData  = z.infer<typeof schema>;