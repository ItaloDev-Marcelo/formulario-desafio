import type { inputData } from "../interfaces/inputInterfaces"



export const InputData0 :inputData[]  = [
    {
        key: 0,
        type: 'text',
        id: 'yourName',
        name: 'nome',
        label: 'Nome completo',
        placeholder: ''
    },
     {
        key: 1,
        type: 'email',
        id: 'yourEmail',
        name: 'email',
        label: 'Email',
        placeholder: ''
    }
]


export const InputData1 :inputData[] = [
     {
        key: 1,
        type: 'tel',
        id: 'yourTell',
        name: 'telefone',
        label: 'Telefone',
        placeholder: ''
    },
    {
        key: 2,
        type: 'text',
        id: 'yourLinkedin',
        name: 'linkedin',
        label: 'Linkedin',
        placeholder: 'https://www.linkedin.com/in/seu-perfil'
    }
]
