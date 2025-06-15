import {type FormData } from "../lib/yupSchema"
import {type  FieldErrors } from "react-hook-form"
import { motion } from "framer-motion"
interface ErrorType {
   name: keyof FormData,
   errors: FieldErrors<FormData>
}

const ErrorText = ({errors, name}:ErrorType) => {
    return <motion.p initial={{opacity: 0, x: '-20px'}} animate={{opacity: 1, x: 0}} 
  transition={{ ease: 'easeIn' , duration: 0.5 }} 
      className="text-red-400"> {errors[name]?.message} </motion.p> 
}

export default ErrorText 