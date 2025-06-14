import {type FormData } from "../lib/yupSchema"
import {type  FieldErrors } from "react-hook-form"
interface ErrorType {
   name: keyof FormData,
   errors: FieldErrors<FormData>
}

const ErrorText = ({errors, name}:ErrorType) => {
    return <p> {errors[name]?.message} </p> 
}

export default ErrorText 