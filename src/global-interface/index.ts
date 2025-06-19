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

export interface RadioFormate  {
    key: number,
    value: string,
    classes: string,
    type: string,
    inputclass: string
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

 
export interface RadioProps {
     valor: string,
     name: keyof FormData,
     register: UseFormRegister<FormData>,
     classes: string,
     type: string,
     inputclass: string
 }
 

 export  interface ErrorType {
   name: keyof FormData,
   errors: FieldErrors<FormData>
}

 export interface objetoFormate {
    nome: string
    email: string
    telefone: string | number
    radioType:string
    linkedin:string
  }