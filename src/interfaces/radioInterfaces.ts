import {type UseFormRegister } from "react-hook-form"
import {type FormData } from "../lib/zodSchema";


export interface RadioProps {
     valor: string,
     name: keyof FormData,
     register: UseFormRegister<FormData>,
     classes: string,
     type: string,
     inputclass: string
 }
 
 export interface RadioFormate  {
    key: number,
    value: string,
    classes: string,
    type: string,
    inputclass: string
 }