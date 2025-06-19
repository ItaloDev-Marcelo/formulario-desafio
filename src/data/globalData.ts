import type { inputData, RadioFormate } from "../global-interface"

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



export const InputRadioData0 :RadioFormate[] =  [
  {
    key: 0,
    value: 'frontend',
    type: 'radio',
    classes: 'flex cursor-pointer py flex-row border-2 items-start w-[100%] h-[40px] md:w-[180] rounded-[6px]',
    inputclass: 'hidden'
  },
  {
    key: 1,
    value: 'mobile',
    type: 'radio',
    classes: 'flex cursor-pointer py flex-row border-2 items-start w-[100%] h-[40px] md:w-[180] rounded-[6px]',
   inputclass: 'hidden'
  },
  {
    key: 2,
    value: 'backend',
    type: 'radio',
    classes: 'flex cursor-pointer py flex-row border-2 items-start w-[100%] h-[40px] md:w-[180] rounded-[6px]',
    inputclass: 'hidden'
  },
  {
    key: 3,
    value: 'fullstack',
    type: 'radio',
    classes: 'flex cursor-pointer py flex-row border-2 items-start w-[100%] h-[40px] md:w-[180] rounded-[6px]',
    inputclass: 'hidden'
  },
  {
    key: 4,
    value: 'devops',
    type: 'radio',
    classes: 'flex cursor-pointer py flex-row border-2 items-start w-[100%] h-[40px] md:w-[180] rounded-[6px]',
    inputclass: 'hidden'
  }
 ]

