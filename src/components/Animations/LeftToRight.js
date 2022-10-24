import {motion} from "framer-motion"

const AnimatedJoin = (props) => {
    
   var initial = -30;
   
   if(props.invert === true){
     initial = initial * (-1)
   }

  return ( 
    <motion.div
    initial={{x: initial, opacity: 0}}
    whileInView={{x: 0, opacity: 1}}
    viewport={{once: true}}
    transition={{type: "tween", duration: props.duration, delay: props.delay}}
    >
    {props.children}
   </motion.div>
  )
}

export default AnimatedJoin

