
type NameType = "nome" | "email" | "telefone" | "linkedin" | "radioType";

interface inputData {
    key: number,
    type: string,
    id: string,
    name: NameType,
    label: string,
    placeholder: string
}

export const arrData :inputData[]  = [
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


export const arrData2 :inputData[] = [
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







// export default arrData arrData2;
