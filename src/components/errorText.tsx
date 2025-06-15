import {type FormData } from "../lib/yupSchema"
import {type  FieldErrors } from "react-hook-form"
import { motion } from "framer-motion"
interface ErrorType {
   name: keyof FormData,
   errors: FieldErrors<FormData>
}

const ErrorText = ({errors, name}:ErrorType) => {
    return <motion.p className="text-red-400"> {errors[name]?.message} </motion.p> 
}

export default ErrorText 