import {type UseFormRegister } from "react-hook-form"
import {type FieldErrors } from "react-hook-form"
import {type FormData } from "../lib/zodSchema";

type NameType = "nome" | "email" | "telefone" | "linkedin" | "radioType";


export interface inputData {
    key: number,
    type: string,
    id: string,
    name: NameType,
    label: string,
    placeholder: string
}


export interface InputProps {
     tipo: string,
     name: keyof FormData,
     label: string,
     placeholder: string,
     id:string,
     register: UseFormRegister<FormData>,
     errors: FieldErrors<FormData>
 }
