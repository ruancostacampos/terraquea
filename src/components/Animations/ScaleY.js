import { AnimatePresence, motion } from "framer-motion"

export const ScaleY = (props) => {
  return (
  <AnimatePresence>
    <motion.div
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{duration: 0.3, type: 'spring'}}
        style={{display: "flex", 
                minHeight: props.minHeight || "calc(100% - 162px)", 
                height: props.height || "auto",
                alignItems: "center", 
                justifyContent: "space-around"}}
      >
    {props.children}
   </motion.div>
  </AnimatePresence>
  )
}

export default ScaleY
