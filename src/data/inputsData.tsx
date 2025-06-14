
type NameType = "nome" | "email" | "telefone" | "linkedin" | "radioType";

interface inputData {
    type: string,
    id: string,
    name: NameType,
    label: string,
    placeholder: string
}

const arrData :inputData[]  = [
    {
        type: 'text',
        id: 'yourName',
        name: 'nome',
        label: 'Nome completo',
        placeholder: 'your Name'
    },
     {
        type: 'email',
        id: 'yourEmail',
        name: 'email',
        label: 'Email',
        placeholder: 'your Email'
    },
     {
        type: 'tel',
        id: 'yourTell',
        name: 'telefone',
        label: 'Telefone',
        placeholder: '(DD)4021345432'
    },
    {
        type: 'text',
        id: 'yourLinkedin',
        name: 'linkedin',
        label: 'Linkedin',
        placeholder: 'https:'
    },

    

]





export default arrData;