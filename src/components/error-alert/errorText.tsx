
import { motion } from "framer-motion"
import type { ErrorType } from "../../global-interface"


const ErrorText = ({errors, name}:ErrorType) => {
    return <motion.p initial={{opacity: .2, x: '-50' }} animate={{opacity: 1, x: 0}}  
  transition={{ ease: 'easeIn' , type: 'spring' , duration: 1, visualDuration: 0.7,}} 
      className="text-red-400"> {errors[name]?.message} </motion.p> 
}

export default ErrorText 