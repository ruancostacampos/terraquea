import {motion} from "framer-motion"

const AnimatedJoin = ({children}) => {
  return (
  
    <motion.div
    initial={{x: -500}}
    whileInView={{x: -90}}
    viewport={{once: true}}
    transition={{type: "spring", duration: 2}}
    >
     {children}  
   </motion.div>
  )
}

export default AnimatedJoin

