import {type FieldErrors } from "react-hook-form"
import {type FormData } from "../lib/zodSchema";



export  interface ErrorType {
   name: keyof FormData,
   errors: FieldErrors<FormData>
}




