import { motion } from "framer-motion"

export const ScaleX = (props) => {
  return (
    <motion.div
    initial={{scaleX: 0, width: "100%", display: "flex", justifyContent: "space-around"}}
    whileInView={{scaleX: 1}}
    viewport={{once: true}}
    transition={{type: "tween", duration: props.duration, delay: props.delay}}
    >
    {props.children}
   </motion.div>
  )
}

export default ScaleX
