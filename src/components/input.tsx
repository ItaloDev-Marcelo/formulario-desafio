interface InputProps {
    tipo: string,
    name: string,
    label: string,
    placeholder: string,
    id:string
}



const Input = ({tipo, name, label, placeholder, id}: InputProps) => {
    return (
        <label htmlFor={id}>
        {label}
        <input type={tipo} name={name} id={id} placeholder={placeholder} />
       </label>
    )
}

export default Input