
type NameType = "nome" | "email" | "telefone" | "linkedin" | "radioType";

interface inputData {
    type: string,
    id: string,
    name: NameType,
    label: string,
    placeholder: string
}

export  const arrData :inputData[]  = [
    {
        type: 'text',
        id: 'yourName',
        name: 'nome',
        label: 'Nome completo',
        placeholder: ''
    },
     {
        type: 'email',
        id: 'yourEmail',
        name: 'email',
        label: 'Email',
        placeholder: ''
    }
]


export const arrData2 :inputData[] = [
     {
        type: 'tel',
        id: 'yourTell',
        name: 'telefone',
        label: 'Telefone',
        placeholder: ''
    },
    {
        type: 'text',
        id: 'yourLinkedin',
        name: 'linkedin',
        label: 'Linkedin',
        placeholder: 'https://www.linkedin.com/in/seu-perfil'
    }
]







// export default arrData arrData2;
